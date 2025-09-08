import React, { useState } from "react";
import { generateShortCode, validateUrl } from "../utils/urlUtils";
import { logEvent } from "./logger";
import "../styles.css"; // CSS import

export default function UrlForm({ onShorten }) {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [customCode, setCustomCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateUrl(url)) {
      alert("Invalid URL format!");
      logEvent("Invalid URL attempt", { url });
      return;
    }

    const code = customCode || generateShortCode();
    const expiry = validity ? parseInt(validity) : 10; // default 10 mins
    const newShortUrl = {
      id: code,
      originalUrl: url,
      shortUrl: `http://localhost:3000/${code}`,
      expiry: new Date(Date.now() + expiry * 60000).toLocaleString(),
      clicks: [],
    };

    logEvent("URL Shortened", { shortUrl: newShortUrl.shortUrl });
    onShorten(newShortUrl);

    setUrl("");
    setValidity("");
    setCustomCode("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Enter Long URL</label>
        <input
          type="text"
          placeholder="https://example.com/long/url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <div className="form-row">
          <div>
            <label>Validity (minutes)</label>
            <input
              type="number"
              placeholder="10"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
            />
          </div>
          <div>
            <label>Custom Shortcode</label>
            <input
              type="text"
              placeholder="my-link"
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Shorten URL
        </button>
      </form>
    </div>
  );
}

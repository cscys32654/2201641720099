import React from "react";

export default function UrlList({ urls }) {
  return (
    <div className="url-list">
      {urls.map((u) => (
        <div key={u.id} className="url-card">
          <p><strong>Original:</strong> {u.originalUrl}</p>
          <p>
            <strong>Short:</strong>{" "}
            <a
              href={u.originalUrl}  // 🔥 Redirect always to original URL
              target="_blank"
              rel="noreferrer"
            >
              {u.shortUrl}          {/* Display fake short URL */}
            </a>
          </p>
          <p><strong>Expires At:</strong> {u.expiry}</p>
          <p><strong>Clicks:</strong> {u.clicks.length}</p>
        </div>
      ))}
    </div>
  );
}

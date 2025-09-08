import React, { useState } from "react";
import UrlForm from "../components/urlForm";
import UrlList from "../components/urlList";

export default function ShortenerPage() {
  const [urls, setUrls] = useState([]);

  const addUrl = (newUrl) => {
    setUrls([...urls, newUrl]);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <UrlForm onShorten={addUrl} />
      <UrlList urls={urls} />
    </div>
  );
}

import React from "react";
import "../styles.css";

export default function UrlStats({ urls }) {
  if (!urls || urls.length === 0) {
    return <p className="empty-msg">No statistics available 📊</p>;
  }

  return (
    <div className="stats-container">
      <h2 className="stats-title">URL Statistics</h2>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Original URL</th>
            <th>Expiry</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((u) => (
            <tr key={u.id}>
              <td>
                <a href={u.shortUrl} target="_blank" rel="noreferrer">
                  {u.shortUrl}
                </a>
              </td>
              <td className="truncate-url">
                <a href={u.originalUrl} target="_blank" rel="noreferrer">
                  {u.originalUrl}
                </a>
              </td>
              <td>{u.expiry}</td>
              <td>{u.clicks.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

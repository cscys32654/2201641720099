import React from "react";

export default function StatsPage() {
  const logs = JSON.parse(localStorage.getItem("logs")) || [];

  return (
    <div>
      <h2>Logs</h2>
      {logs.map((log, idx) => (
        <div key={idx}>
          <p>{log.timestamp} - {log.message}</p>
          <pre>{JSON.stringify(log, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}

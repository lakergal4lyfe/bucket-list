import React from "react";

export default function ViewHome() {
  return (
    <main style={{maxWidth: '600px', margin: '0 auto'}}>
      home page
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2>Title</h2>
        <h2>Poster</h2>
        <h2>Plot</h2>
      </div>
    </main>
  );
}

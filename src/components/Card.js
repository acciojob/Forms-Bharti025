import React from 'react';

const cardStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '10px',
  maxWidth: '400px',
  margin: '20px auto',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

function Card({ title, children }) {
  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;


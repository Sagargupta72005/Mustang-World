import React from 'react';
import { Link } from 'react-router-dom'; // Remove this if you are not using react-router

const Error404 = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        404
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        The page you are looking for could not be found.
      </p>

      <Link
        to="/"
        style={{
          padding: '0.75rem 1.5rem',
          border: '1px solid #000',
          textDecoration: 'none',
          fontSize: '1rem'
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error404;

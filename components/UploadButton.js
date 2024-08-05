// components/UploadButton.js

'use client';

import React from 'react';

const UploadButton = ({ handleFileUploadClick }) => {
  return (
    <div className="section__content-cta">
      <button onClick={handleFileUploadClick} className="btn btn-fo">
        Upload File (Max 3mb)
      </button>
      <a href="/" className="btn btn-ft">
        Start Analysis
      </a>
    </div>
  );
};

export default UploadButton;

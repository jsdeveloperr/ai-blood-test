// components/HealthCheckModal.js

'use client';

import React, { useState, useRef } from 'react';
import { handleFileChange, handleSubmit } from '../utils/content';
import ResultModal from './ResultModal';

const HealthCheckModal = ({ file, setFile, fileInputRef }) => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  const truncatedResult = truncateText(result, 380);


  return (
<>
<div className="flex flex-wrap w-full">
      <div className="col-12 col-sm-6 w-1/2 pr-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-black">Report Input</h2>
        <form onSubmit={(e) => handleSubmit(e, file, setLoading, setResult)} className="flex flex-col items-center">
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setFile)}
            className="hidden"
            id="file-input"
            ref={fileInputRef}
          />
          <label
            htmlFor="file-input"
            className="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer mb-4"
          >
            {file ? file.name : 'Choose File'}
          </label>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded text-center flex items-center justify-center"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Run'}
          </button>
        </form>
      </div>
      <div className="col-12 col-sm-6 w-1/2 pl-4">
        <div className="bg-white p-4 rounded-lg shadow-md min-h-48 flex flex-col">
            {result ? (<div className="mt-2 mb-3 rounded overflow-auto text-black flex items-center justify-between">
              <h3 className="text-lg font-semibold">Raporun Çıktısı:</h3>
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                Tam Ekran Yap
              </span>
            </div>) : <h2 className="text-xl font-bold mb-4 text-black">{'Report Output'}</h2>}
          <pre className="text-sm text-gray-400">Raporunuza göre bazı önemli değerleri inceleyelim<br/>ve ne anlama geldiklerini açıklayalım:</pre>
          {result ? (
            <>
            <pre className="text-sm text-gray-500">{truncatedResult}</pre>
            <button className="text-blue-500 cursor-pointer" onClick={() => setIsModalOpen(true)}>
                Devamını oku ...
            </button>
            </>

          ) : (
            <div className="flex-grow flex items-center justify-center text-gray-400">
              No report output available
            </div>
          )}
        </div>
      </div>
    </div>
    {isModalOpen && <ResultModal result={result} onClose={() => setIsModalOpen(false)} />}
</>
  );
};

export default HealthCheckModal;

'use client';

import React, { useEffect } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const ResultModal = ({ result, onClose }) => {
  useEffect(() => {
    // Disable scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scroll when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleDownload = () => {
    const rows = result.split('\n').map(line => line.split(':').map(item => item.trim()));

    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'report.xlsx');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-40"></div>
      <div className="relative bg-white rounded-lg shadow-lg z-50 w-full max-w-4xl mx-auto max-h-full overflow-hidden">
        <div className="flex justify-between items-center border-b pb-3 mb-3 p-4">
          <h3 className="text-xl font-semibold">Raporun Çıktısı</h3>
          <div className="flex items-center">
            <button onClick={handleDownload} className="text-gray-400 hover:text-gray-600 mr-4 flex items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <span className="ml-2">Excel indir</span>
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 flex items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span className="ml-2">Kapat</span>
            </button>
          </div>
        </div>
        <div className="overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 380px)' }}>
          <pre className="text-sm text-black whitespace-pre-wrap">{result}</pre>
        </div>
        <div className="flex justify-end p-4 border-t">
          <button onClick={onClose} className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg text-center flex items-center justify-center">Kapat</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;

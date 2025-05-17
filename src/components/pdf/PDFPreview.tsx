import { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';

interface PDFPreviewProps {
  document: React.ReactElement;
  buttonLabel?: string;
}

const PDFPreview = ({ document, buttonLabel = 'Voir l\'aperçu PDF' }: PDFPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePreview = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 inline-flex items-center"
        onClick={togglePreview}
      >
        {isOpen ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Fermer l'aperçu
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {buttonLabel}
          </>
        )}
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-5xl flex flex-col h-[90vh] border border-gray-200">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h2 className="text-xl font-bold text-gray-800">Aperçu du CV</h2>
              <button 
                className="bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
                onClick={togglePreview}
              >
                <span>Fermer</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-grow bg-gray-50 rounded-md overflow-hidden">
              <PDFViewer style={{ width: '100%', height: '100%', border: 'none' }}>
                {document as any}
              </PDFViewer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFPreview;

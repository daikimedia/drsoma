import React from "react";

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({ visible, onClose, children }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-10 relative" style={{ border: '4px solid #eee', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
        <div style={{ border: '2px solid #EA622F', borderRadius: '14px', padding: 0, height: '100%' }}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-700 hover:text-gray-900 text-3xl font-bold focus:outline-none"
            aria-label="Close"
            style={{ zIndex: 10 }}
          >
            &times;
          </button>
          <div className="px-8 py-8" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <div className="text-center mb-6">
              <h2 style={{ fontWeight: 800, fontSize: 28, letterSpacing: 0.5 }}>COST OF SERVICES</h2>
            </div>
            <div className="text-base text-gray-800 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal; 
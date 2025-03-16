import React from 'react';
import resumePdf from '../assets/resume.pdf';

const Contact = ({ onClose }) => {
  const handleDownloadResume = () => {
    // PDF 파일 다운로드 링크 생성
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Yuna_Lee_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <p style={{ color: '#ffffff', marginBottom: '20px' }}>Feel free to reach out to me for collaboration or job opportunities!</p>
      <div style={{ marginTop: '20px' }}>
        <p style={{ color: '#ffffff' }}><strong style={{ color: '#00ff00' }}>Email:</strong> yuunalee1050@gmail.com</p>
        <p style={{ color: '#ffffff' }}><strong style={{ color: '#00ff00' }}>Location:</strong> Seoul, South Korea</p>
        <p style={{ color: '#ffffff' }}><strong style={{ color: '#00ff00' }}>Availability:</strong> Open to freelance and full-time positions</p>
      </div>
      <button 
        onClick={handleDownloadResume}
        style={{
          background: 'transparent',
          color: '#00ff00',
          border: '1px solid #00ff00',
          padding: '10px 15px',
          marginTop: '20px',
          cursor: 'pointer',
          width: '100%',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'rgba(0, 60, 0, 0.5)';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.3)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Contact;
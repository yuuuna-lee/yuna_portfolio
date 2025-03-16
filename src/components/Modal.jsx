import React, { useEffect, useRef } from 'react';

const Modal = ({ title, onClose, children }) => {
  const modalRef = useRef(null);
  
  // 모달이 열릴 때 스크롤 방지
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  // 모달 외부 클릭 시 닫기
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '20px',
        overflow: 'hidden' // 전체 모달 영역에서 스크롤 방지
      }}
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        style={{ 
          maxWidth: '1000px', 
          width: '100%', 
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(0, 10, 0, 0.9)',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(0, 255, 0, 0.3), 0 0 40px rgba(0, 255, 0, 0.1) inset',
          border: '1px solid rgba(0, 255, 0, 0.3)',
          position: 'relative',
          animation: 'modalFadeIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 헤더 */}
        <div style={{
          padding: '20px 30px',
          borderBottom: '1px solid rgba(0, 255, 0, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          background: 'rgba(0, 10, 0, 0.95)',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          zIndex: 2
        }}>
          <h2 style={{ 
            margin: 0,
            color: '#00ff00',
            textTransform: 'uppercase',
            fontSize: 'clamp(18px, 4vw, 24px)',
            fontFamily: 'DOSGothic, monospace',
            letterSpacing: '1px'
          }}>
            {title}
          </h2>
          
          {/* 닫기 버튼 */}
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00ff00',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 0, 0.2)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>
        </div>
        
        {/* 모달 콘텐츠 */}
        <div style={{ 
          padding: '30px',
          overflowY: 'auto',
          overflowX: 'hidden',
          flex: 1,
          scrollbarWidth: 'thin',
          scrollbarColor: '#00ff00 rgba(0, 10, 0, 0.5)'
        }}>
          {children}
        </div>
        
        {/* 모달 푸터 */}
        <div style={{
          padding: '15px 30px',
          borderTop: '1px solid rgba(0, 255, 0, 0.3)',
          display: 'flex',
          justifyContent: 'flex-end',
          background: 'rgba(0, 10, 0, 0.95)',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px'
        }}>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(0, 40, 0, 0.7)',
              border: '1px solid #00ff00',
              color: '#00ff00',
              padding: '8px 16px',
              borderRadius: '5px',
              fontFamily: 'DOSGothic, monospace',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0, 60, 0, 0.7)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0, 40, 0, 0.7)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
      
      {/* 애니메이션을 위한 스타일 */}
      <style>
        {`
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* 스크롤바 스타일 (Webkit 브라우저용) */
          div::-webkit-scrollbar {
            width: 8px;
          }
          
          div::-webkit-scrollbar-track {
            background: rgba(0, 10, 0, 0.5);
            border-radius: 10px;
          }
          
          div::-webkit-scrollbar-thumb {
            background: #00ff00;
            border-radius: 10px;
          }
          
          div::-webkit-scrollbar-thumb:hover {
            background: #00cc00;
          }
        `}
      </style>
    </div>
  );
};

export default Modal;
import React from 'react';

const Skills = ({ onClose }) => {
  return (
    <div>
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        borderRadius: '8px', 
        background: 'rgba(0,40,0,0.3)', 
        boxShadow: '0 0 8px rgba(0,255,0,0.2)' 
      }}>
        <h3 style={{ 
          borderBottom: '1px solid #00ff00', 
          paddingBottom: '8px', 
          marginBottom: '12px',
          color: '#00ff00' 
        }}>1️⃣ Frontend Development</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>React.js (컴포넌트 기반 UI 설계, 상태 관리)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Three.js (3D 인터랙티브 웹 구현)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>TailwindCSS (유틸리티 퍼스트 CSS, 반응형 디자인)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>JavaScript (ES6+) (비동기 처리, 모듈 시스템)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>TypeScript (정적 타입 시스템, 타입 안정성)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>HTML5 & CSS3 (웹 표준, 반응형 웹 개발)</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Vite (빠른 빌드 및 번들링)</span>
          </li>
        </ul>
      </div>
      
      {/* 나머지 스킬 섹션들 */}
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        borderRadius: '8px', 
        background: 'rgba(0,40,0,0.3)', 
        boxShadow: '0 0 8px rgba(0,255,0,0.2)' 
      }}>
        <h3 style={{ 
          borderBottom: '1px solid #00ff00', 
          paddingBottom: '8px', 
          marginBottom: '12px',
          color: '#00ff00' 
        }}>2️⃣ Backend Development</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Python (Flask) (REST API 설계 및 서버 구축)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>FastAPI (비동기 API 개발 경험)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Node.js (Express) (기본적인 백엔드 개발 경험)</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>MySQL / MongoDB (데이터베이스 설계 및 활용)</span>
          </li>
        </ul>
      </div>
      
      {/* 나머지 스킬 섹션들 */}
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        borderRadius: '8px', 
        background: 'rgba(0,40,0,0.3)', 
        boxShadow: '0 0 8px rgba(0,255,0,0.2)' 
      }}>
        <h3 style={{ 
          borderBottom: '1px solid #00ff00', 
          paddingBottom: '8px', 
          marginBottom: '12px',
          color: '#00ff00' 
        }}>3️⃣ AI & NLP (Natural Language Processing)</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>형태소 분석 (Mecab, KoNLPy)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>POS 태깅 (Part-of-Speech Tagging)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>텍스트 전처리 및 언어 데이터 분석</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>LLM (Large Language Model) 활용 및 API 연동</span>
          </li>
        </ul>
      </div>
      
      {/* 나머지 스킬 섹션들 */}
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        borderRadius: '8px', 
        background: 'rgba(0,40,0,0.3)', 
        boxShadow: '0 0 8px rgba(0,255,0,0.2)' 
      }}>
        <h3 style={{ 
          borderBottom: '1px solid #00ff00', 
          paddingBottom: '8px', 
          marginBottom: '12px',
          color: '#00ff00' 
        }}>4️⃣ Tools & DevOps</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Git & GitHub (버전 관리 및 협업)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Figma (UI/UX 디자인 및 프로토타이핑)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Vercel / Netlify (프론트엔드 배포)</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Docker (컨테이너 기반 환경 구축 경험)</span>
          </li>
        </ul>
      </div>
      
      <div style={{ 
        padding: '15px', 
        borderRadius: '8px', 
        background: 'rgba(0,40,0,0.3)', 
        boxShadow: '0 0 8px rgba(0,255,0,0.2)' 
      }}>
        <h3 style={{ 
          borderBottom: '1px solid #00ff00', 
          paddingBottom: '8px', 
          marginBottom: '12px',
          color: '#00ff00' 
        }}>5️⃣ 기타</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Chrome Extension Development (크롬 익스텐션 개발)</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>REST API 연동 및 데이터 처리</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>웹 최적화 및 성능 개선</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
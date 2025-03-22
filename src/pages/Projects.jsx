import React from 'react';

const Projects = ({ onClose }) => {
  return (
    <div style={{
      maxHeight: '80vh',
      overflowY: 'auto',
      padding: '20px',
      WebkitOverflowScrolling: 'touch',
    }}>
      <div style={{ 
        marginBottom: '25px', 
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
        }}>OTFIT 익스텐션</h3>
        <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#ffffff' }}>AI 가상 피팅을 활용한 온라인 쇼핑 보조 서비스</p>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>신체적 제약이 있는 사용자들을 위한 편리한 가상 피팅 솔루션 개발</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>정확한 피팅을 위한 리사이징 및 파라미터 제어, UI/UX 개선 담당</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>기술 스택: React.js, Python (Flask), REST API, JavaScript, TailwindCSS</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>협업 형태: 2인 팀 프로젝트</span>
          </li>
        </ul>
        <a 
          href="https://chromewebstore.google.com/detail/otfit/cfdepeimbnkpaebbcfebmdgfnfanlckp" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'inline-block',
            color: '#000000', 
            background: '#00ff00',
            padding: '6px 12px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '14px',
            letterSpacing: '1px',
            boxShadow: '0 0 10px rgba(0,255,0,0.5)'
          }}
        >
          View Project
        </a>
      </div>
      
      <div style={{ 
        marginBottom: '25px', 
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
        }}>오픽의 마법사</h3>
        <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#ffffff' }}>개인 언어 지문(fingerprint) 기반 영어 학습 도우미</p>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>형태소 분석 및 POS 태깅을 활용한 사용자 언어 습관 분석</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>AI 기반 맞춤형 영어 표현 추천 서비스 개발</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>시공간적 제약으로 학원 등록이 어려운 취업준비생을 위한 맞춤형 학습 솔루션</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>기술 스택: React.js, TailwindCSS, Python (Flask), Vercel</span>
          </li>
          <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>협업 형태: 1인 프로젝트</span>
          </li>
        </ul>
        <a 
          href="https://op-ic-magician.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'inline-block',
            color: '#000000', 
            background: '#00ff00',
            padding: '6px 12px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: '14px',
            letterSpacing: '1px',
            boxShadow: '0 0 10px rgba(0,255,0,0.5)'
          }}
        >
          View Project
        </a>
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
        }}>레트로 포트폴리오 웹사이트</h3>
        <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#ffffff' }}>3D 인터랙티브 레트로 테마 포트폴리오</p>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>Three.js를 활용한 3D 컴퓨터 인터페이스 구현</span>
          </li>
          <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>기술 스택: React.js, TailwindCSS, Three.js</span>
          </li>
          <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
            <span style={{ color: '#ffffff' }}>협업 형태: 1인 프로젝트</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
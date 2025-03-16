import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Background from './pages/Background'
import Computer from './components/Computer'
import Modal from './components/Modal'
import Introduction from './pages/Introduction'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  const [zoom, setZoom] = useState(2.5) // 배경 별 줌 레벨
  const [modelPath, setModelPath] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [displayText, setDisplayText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const paragraphs = [
    "프론트엔드 개발자로서 웹과 AI, 그리고 언어의 접점을 탐구하고 있습니다.",
    "\"보다 직관적이고 유용한 웹 서비스\"를 만드는 것이 목표이며, React, TailwindCSS, Three.js 등을 활용하여 사용자 경험을 극대화하는 인터페이스를 설계합니다.",
    "언어학과 AI에 대한 깊은 관심을 바탕으로, 기술을 통해 더 효과적인 커뮤니케이션을 가능하게 만드는 일을 꿈꿉니다."
  ];

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault()
      
      const direction = event.deltaY > 0 ? -1 : 1
      const sensitivity = 0.05
      
      setZoom(prevZoom => {
        let zoomFactor
        
        if (direction > 0) {
          zoomFactor = Math.max(0.02, 0.05 - (prevZoom * 0.02))
          const newZoom = prevZoom + (direction * zoomFactor * sensitivity)
          return Math.min(Math.max(newZoom, 0.7), 1.2)
        } else {
          zoomFactor = 0.075
          const newZoom = prevZoom + (direction * zoomFactor * sensitivity)
          return Math.min(Math.max(newZoom, 0.5), 4.0)
        }
      })
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  useEffect(() => {
    if (isTypingComplete) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < paragraphs[currentParagraph].length) {
        setDisplayText(prev => prev + paragraphs[currentParagraph].charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        if (currentParagraph < paragraphs.length - 1) {
          setTimeout(() => {
            setDisplayText(prev => prev + "\n\n");
            setCurrentParagraph(prev => prev + 1);
          }, 500);
        } else {
          setIsTypingComplete(true);
        }
      }
    }, 50); // 타이핑 속도를 더 느리게 조정 (30ms → 50ms)
    
    return () => clearInterval(typingInterval);
  }, [currentParagraph, isTypingComplete]);

  return (
    <div className="App" style={{ 
      backgroundColor: '#000000', 
      color: '#00ff00',
      minHeight: '100vh',
      fontFamily: "'Courier New', monospace",
      overflow: 'hidden'
    }}>
      {/* 배경 별 */}
      <Background zoom={zoom} />
      
      {/* 네비게이션 메뉴 */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        gap: '20px',
        background: 'rgba(0,0,0,0.7)',
        padding: '10px 20px',
        borderRadius: '30px',
        boxShadow: '0 0 10px rgba(0,255,0,0.3)'
      }}>
        {['home', 'introduction', 'projects', 'skills', 'contact'].map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeSection === section ? '#00ff00' : '#aaaaaa',
              fontFamily: 'DOSGothic, monospace',
              fontSize: '16px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              padding: '5px 10px',
              borderBottom: activeSection === section ? '2px solid #00ff00' : 'none'
            }}
          >
            {section}
          </button>
        ))}
      </nav>
      
      {/* 소셜 미디어 링크 */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 10,
        display: 'flex',
        gap: '15px'
      }}>
        <a
          key="GitHub"
          href="https://github.com/yuuuna-lee"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#00ff00',
            fontFamily: 'DOSGothic, monospace',
            textDecoration: 'none',
            fontSize: '14px',
            background: 'rgba(0,0,0,0.7)',
            padding: '8px 12px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,255,0,0.2)'
          }}
        >
          GitHub
        </a>
        <a
          key="Email"
          href="mailto:yuunalee1050@gmail.com"
          style={{
            color: '#00ff00',
            fontFamily: 'DOSGothic, monospace',
            textDecoration: 'none',
            fontSize: '14px',
            background: 'rgba(0,0,0,0.7)',
            padding: '8px 12px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,255,0,0.2)'
          }}
        >
          Email
        </a>
      </div>
      
      <div className="hero" style={{ 
        position: 'relative', 
        height: '100vh', 
        width: '100%',
        overflow: 'hidden' // 넘치는 요소 숨기기
      }}>
        {/* 컴퓨터를 아주 조금 더 오른쪽으로 이동 */}
        <div style={{ 
          position: 'absolute',
          right: '-8%', // -7%에서 -8%로 변경하여 오른쪽으로 조금 더 이동
          top: '50%',
          transform: 'translateY(-50%)',
          width: '70%', // 컴퓨터 크기 조정
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}>
          <Computer />
        </div>
        
        {/* 왼쪽에 타이핑 효과가 있는 소개 내용 배치 */}
        <div style={{ 
          position: 'absolute',
          left: '10%',
          top: '50%',
          transform: 'translateY(-50%)',
          maxWidth: '40%',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // 배경 추가하여 가독성 향상
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'left', // 왼쪽 정렬 추가
          fontFamily: 'DOSGothic, monospace' // DOSGothic 폰트 적용
        }}>
          <h3 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#ffffff',
            textAlign: 'left', // 제목도 왼쪽 정렬
            fontFamily: 'DOSGothic, monospace' // DOSGothic 폰트 적용
          }}>
            Hello, I'm Yuna!
          </h3>
          <div style={{ lineHeight: '1.6' }}>
            <p style={{ 
              marginBottom: '15px', 
              color: '#ffffff',
              whiteSpace: 'pre-line', // 줄바꿈 처리를 위해 추가
              textAlign: 'left', // 왼쪽 정렬 강조
              fontFamily: 'DOSGothic, monospace' // DOSGothic 폰트 적용
            }}>
              {displayText}
              {!isTypingComplete && (
                <span className="cursor" style={{ 
                  display: 'inline-block', 
                  width: '2px', 
                  height: '1em', 
                  backgroundColor: '#ffffff',
                  marginLeft: '2px',
                  animation: 'blink 1s infinite'
                }}></span>
              )}
            </p>
          </div>
        </div>
      </div>
      
      {/* 커서 깜빡임 애니메이션을 위한 스타일 */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      
      {/* 모달 컴포넌트로 각 페이지 렌더링 */}
      {activeSection === 'introduction' && (
        <Modal title="introduction" onClose={() => setActiveSection('home')}>
          <Introduction />
        </Modal>
      )}
      
      {activeSection === 'projects' && (
        <Modal title="projects" onClose={() => setActiveSection('home')}>
          <Projects />
        </Modal>
      )}
      
      {activeSection === 'skills' && (
        <Modal title="skills" onClose={() => setActiveSection('home')}>
          <Skills />
        </Modal>
      )}
      
      {activeSection === 'contact' && (
        <Modal title="contact" onClose={() => setActiveSection('home')}>
          <Contact />
        </Modal>
      )}
    </div>
  )
}

export default App

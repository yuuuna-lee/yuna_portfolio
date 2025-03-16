import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Background from './pages/Background'
import Computer from './components/Computer.jsx'

function App() {
  const [zoom, setZoom] = useState(2.5) // 배경 별 줌 레벨
  const [modelPath, setModelPath] = useState(null)
  const [activeSection, setActiveSection] = useState('home')

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

  return (
    <>
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
      
      {/* 레트로 컴퓨터 */}
      <Suspense fallback={null}>
        <Computer modelPath={modelPath} />
      </Suspense>
      
      {/* 콘텐츠 섹션 */}
      {activeSection !== 'home' && (
        <div style={{
          position: 'fixed',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          maxHeight: 'calc(100vh - 200px)',
          overflowY: 'auto',
          background: 'rgba(0,0,0,0.8)',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 5,
          fontFamily: 'DOSGothic, monospace',
          color: '#00ff00',
          boxShadow: '0 0 20px rgba(0,255,0,0.2)',
          border: '1px solid #00ff00'
        }}>
          <h2 style={{ 
            borderBottom: '1px solid #00ff00', 
            paddingBottom: '10px',
            textTransform: 'uppercase'
          }}>
            {activeSection}
          </h2>
          
          {activeSection === 'introduction' && (
            <div>
              <h3 style={{ 
                color: '#00ff00', 
                marginBottom: '15px',
                fontSize: '20px'
              }}>
                Hello, I'm Yuna!
              </h3>
              <div style={{ lineHeight: '1.6' }}>
                <p style={{ marginBottom: '15px', color: '#ffffff' }}>
                  프론트엔드 개발자로서 웹과 AI, 그리고 언어의 접점을 탐구하고 있습니다.
                </p>
                <p style={{ marginBottom: '15px', color: '#ffffff' }}>
                  <span style={{ 
                    background: 'rgba(0,255,0,0.2)', 
                    padding: '2px 5px', 
                    borderRadius: '3px' 
                  }}>
                    "보다 직관적이고 유용한 웹 서비스"
                  </span>를 만드는 것이 목표이며,
                  React, TailwindCSS, Three.js 등을 활용하여 사용자 경험을 극대화하는 인터페이스를 설계합니다.
                </p>
                <p style={{ marginBottom: '15px', color: '#ffffff' }}>
                  언어학과 AI에 대한 깊은 관심을 바탕으로,
                  기술을 통해 더 효과적인 커뮤니케이션을 가능하게 만드는 일을 꿈꿉니다.
                </p>
                <div style={{
                  marginTop: '25px',
                  padding: '15px',
                  borderRadius: '8px',
                  background: 'rgba(0,40,0,0.3)',
                  boxShadow: '0 0 8px rgba(0,255,0,0.2)',
                  textAlign: 'center'
                }}>
                  <p style={{ 
                    fontSize: '16px', 
                    fontStyle: 'italic',
                    color: '#ffffff'
                  }}>
                    "기술은 인간의 삶을 더 풍요롭게 만들기 위한 도구입니다."
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeSection === 'projects' && (
            <div>
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
          )}
          
          {activeSection === 'skills' && (
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
                    <span style={{ color: '#ffffff' }}>HTML5 & CSS3 (웹 표준, 반응형 웹 개발)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                    <span style={{ color: '#ffffff' }}>Vite (빠른 빌드 및 번들링)</span>
                  </li>
                </ul>
              </div>
              
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
          )}
          
          {activeSection === 'contact' && (
            <div>
              <p style={{ color: '#ffffff', marginBottom: '20px' }}>Feel free to reach out to me for collaboration or job opportunities!</p>
              <div style={{ marginTop: '20px' }}>
                <p style={{ color: '#ffffff' }}><strong style={{ color: '#00ff00' }}>Email:</strong> yuunalee1050@gmail.com</p>
                <p style={{ color: '#ffffff' }}><strong style={{ color: '#00ff00' }}>Location:</strong> Seoul, South Korea</p>
                <p style={{ color: '#ffffff' }}><strong style={{ color: '#00ff00' }}>Availability:</strong> Open to freelance and full-time positions</p>
              </div>
              <button style={{
                background: 'transparent',
                border: '1px solid #00ff00',
                color: '#00ff00',
                padding: '10px 15px',
                marginTop: '20px',
                cursor: 'pointer',
                width: '100%'
              }}>
                Download Resume
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default App

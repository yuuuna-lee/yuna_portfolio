import React from 'react';

const Introduction = ({ onClose }) => {
  return (
    <div>
      <h3 style={{ 
        color: '#00ff00', 
        marginBottom: '15px',
        fontSize: '20px'
      }}>
        안녕하세요, 이유나입니다!
      </h3>
      <div style={{ lineHeight: '1.6' }}>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ marginBottom: '8px', color: '#ffffff' }}>
            <span style={{ color: '#00ff00' }}>연락처:</span> 010-5632-1964
          </p>
          <p style={{ marginBottom: '8px', color: '#ffffff' }}>
            <span style={{ color: '#00ff00' }}>이메일:</span> yuunalee1050@gmail.com
          </p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ 
            color: '#00ff00', 
            borderBottom: '1px solid #00ff00',
            paddingBottom: '5px',
            marginBottom: '10px'
          }}>
            목표
          </h4>
          <p style={{ color: '#ffffff' }}>
            인간 언어학과 프로그래밍 언어 모두에 능숙한 프론트엔드 개발자로서, 뛰어난 소통 능력을 바탕으로 가치 있는 서비스를 개발합니다.
          </p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ 
            color: '#00ff00', 
            borderBottom: '1px solid #00ff00',
            paddingBottom: '5px',
            marginBottom: '10px'
          }}>
            학력
          </h4>
          
          <div style={{ 
            marginBottom: '15px', 
            padding: '12px',
            border: '1px solid rgba(0, 255, 0, 0.3)',
            borderRadius: '5px',
            background: 'rgba(0, 20, 0, 0.3)'
          }}>
            <p style={{ color: '#ffffff', fontWeight: 'bold' }}>
              <span style={{ color: '#00ff00' }}>2024 - 현재</span> | 삼성 청년 SW 아카데미 (SSAFY)
            </p>
            <p style={{ color: '#ffffff', marginLeft: '15px' }}>
              기술 스택 교육: Java, Spring Framework, MySQL, RESTful API, JavaScript (Vue.js, React 포함), Node.js, Three.js, Vercel, Python (Flask)
            </p>
          </div>
          
          <div style={{ 
            marginBottom: '15px', 
            padding: '12px',
            border: '1px solid rgba(0, 255, 0, 0.3)',
            borderRadius: '5px',
            background: 'rgba(0, 20, 0, 0.3)'
          }}>
            <p style={{ color: '#ffffff', fontWeight: 'bold' }}>
              <span style={{ color: '#00ff00' }}>2022 - 현재</span> | 연세대학교 교육대학원
            </p>
            <p style={{ color: '#ffffff', marginLeft: '15px' }}>
              영어교육 석사 과정 (논문 준비 중)
            </p>
            <p style={{ color: '#ffffff', marginLeft: '15px', marginTop: '5px' }}>
              관련 수강 과목:
            </p>
            <ul style={{ color: '#ffffff', marginLeft: '30px', listStyleType: 'none' }}>
              <li style={{ marginBottom: '5px', display: 'flex' }}>
                <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                인간 행동 심리학: 언어 습득과 관련된 행동 및 인지 연구
              </li>
              <li style={{ marginBottom: '5px', display: 'flex' }}>
                <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                언어 습득론: 인간 언어 학습 메커니즘 연구
              </li>
              <li style={{ marginBottom: '5px', display: 'flex' }}>
                <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                코퍼스 분석: 코퍼스 기반 언어학적 분석 및 통계 방법론
              </li>
              <li style={{ display: 'flex' }}>
                <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                논문을 위한 통계 방법론: 연구 설계를 위한 통계 기법 습득
              </li>
            </ul>
          </div>
          
          <div style={{ 
            padding: '12px',
            border: '1px solid rgba(0, 255, 0, 0.3)',
            borderRadius: '5px',
            background: 'rgba(0, 20, 0, 0.3)'
          }}>
            <p style={{ color: '#ffffff', fontWeight: 'bold' }}>
              <span style={{ color: '#00ff00' }}>2018 - 2022</span> | 한국외국어대학교
            </p>
            <p style={{ color: '#ffffff', marginLeft: '15px' }}>
              영어학 및 언어공학 학사 (ELLT)
            </p>
            <p style={{ color: '#ffffff', marginLeft: '15px', marginTop: '5px' }}>
              관련 수강 과목:
            </p>
            <ul style={{ color: '#ffffff', marginLeft: '30px', listStyleType: 'none' }}>
              <li style={{ marginBottom: '5px', display: 'flex' }}>
                <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                AI 언어 학습: 자연어 처리 및 언어 습득을 위한 머신러닝 모델 탐구
              </li>
              <li style={{ marginBottom: '5px', display: 'flex' }}>
                <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                담화 분석: 언어 구조 내 맥락과 의미 분석
              </li>
              <li style={{ marginBottom: '5px', display: 'flex' }}>
                <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                음성 처리: 음성 데이터 분석 및 처리 기술 연구
              </li>
              <li style={{ display: 'flex' }}>
                <span style={{ color: '#00ff00', marginRight: '8px' }}>▶</span>
                데이터 마이닝: 패턴 추출 및 언어 데이터 처리 전문성 습득
              </li>
            </ul>
          </div>
        </div>
        
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
            "인간 언어와 프로그래밍 언어 사이의 간극을 연결합니다"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
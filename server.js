const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // URL 인코딩 파싱

// CORS 설정 (필요한 경우)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 라우트 설정
app.use('/api/users', userRoutes);

// 기본 라우트
app.get('/', (req, res) => {
  res.json({
    message: '사용자 관리 API에 오신 것을 환영합니다!',
    endpoints: {
      'GET /api/users': '모든 사용자 조회',
      'GET /api/users/:id': '특정 사용자 조회',
      'POST /api/users': '새 사용자 생성',
      'PUT /api/users/:id': '사용자 정보 수정',
      'DELETE /api/users/:id': '사용자 삭제'
    }
  });
});

// 404 에러 핸들링
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: '요청한 엔드포인트를 찾을 수 없습니다.'
  });
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: '서버 내부 오류가 발생했습니다.'
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`http://localhost:${PORT} 에서 확인하세요.`);
});

module.exports = app;

// User Controller
class UserController {
  // GET /users - 모든 사용자 조회
  static getAllUsers(req, res) {
    try {
      // 실제 프로젝트에서는 데이터베이스에서 데이터를 가져옵니다
      const users = [
        { id: 1, name: '김철수', email: 'kim@example.com' },
        { id: 2, name: '이영희', email: 'lee@example.com' },
        { id: 3, name: '박민수', email: 'park@example.com' }
      ];
      
      res.status(200).json({
        success: true,
        data: users,
        message: '사용자 목록을 성공적으로 조회했습니다.'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
        error: error.message
      });
    }
  }

  // GET /users/:id - 특정 사용자 조회
  static getUserById(req, res) {
    try {
      const { id } = req.params;
      
      // 실제 프로젝트에서는 데이터베이스에서 해당 ID의 사용자를 찾습니다
      const user = { id: parseInt(id), name: '김철수', email: 'kim@example.com' };
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: '사용자를 찾을 수 없습니다.'
        });
      }
      
      res.status(200).json({
        success: true,
        data: user,
        message: '사용자 정보를 성공적으로 조회했습니다.'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
        error: error.message
      });
    }
  }

  // POST /users - 새 사용자 생성
  static createUser(req, res) {
    try {
      const { name, email } = req.body;
      
      // 입력 데이터 검증
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: '이름과 이메일은 필수 입력 항목입니다.'
        });
      }
      
      // 실제 프로젝트에서는 데이터베이스에 사용자를 저장합니다
      const newUser = {
        id: Date.now(), // 임시 ID 생성
        name,
        email,
        createdAt: new Date().toISOString()
      };
      
      res.status(201).json({
        success: true,
        data: newUser,
        message: '사용자가 성공적으로 생성되었습니다.'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
        error: error.message
      });
    }
  }

  // PUT /users/:id - 사용자 정보 수정
  static updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      
      // 실제 프로젝트에서는 데이터베이스에서 사용자를 찾고 업데이트합니다
      const updatedUser = {
        id: parseInt(id),
        name: name || '김철수',
        email: email || 'kim@example.com',
        updatedAt: new Date().toISOString()
      };
      
      res.status(200).json({
        success: true,
        data: updatedUser,
        message: '사용자 정보가 성공적으로 수정되었습니다.'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
        error: error.message
      });
    }
  }

  // DELETE /users/:id - 사용자 삭제
  static deleteUser(req, res) {
    try {
      const { id } = req.params;
      
      // 실제 프로젝트에서는 데이터베이스에서 사용자를 삭제합니다
      res.status(200).json({
        success: true,
        message: `ID ${id}의 사용자가 성공적으로 삭제되었습니다.`
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
        error: error.message
      });
    }
  }
}

module.exports = UserController;

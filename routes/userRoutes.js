const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

// 사용자 관련 라우트 정의
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;

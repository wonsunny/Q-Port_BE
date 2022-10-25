const { Router } = require('express');
const router = Router();
const auth = require('../middlewares/authMiddlewares')

const UserController = require('../controllers/user.controller');
const userController = new UserController();


router.get('/users', auth, userController.getUser);
router.get('/users/:userId', auth, userController.getOther);
router.put('/users/:userId', auth, userController.updateUser);

module.exports = router;

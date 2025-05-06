const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();
const userScheme = require("../validations/userValidation");
const validation = require("../middleware/validationMiddleware")

// User Section
router.post('/', validation(userScheme) ,UserController.createUser);
router.get('/', UserController.getUsers)
router.get('/:id',UserController.getUserByID)
router.delete('/:id',UserController.deleteUserByID)
router.put('/:id',UserController.updateUserByID)

// Post Section


module.exports = router;

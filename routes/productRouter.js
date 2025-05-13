const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

// router.get('/', checkRole('ADMINISTRATOR'), clientsController.fetch)
router.get('/', productController.fetch)
router.post('/', productController.create)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)

module.exports = router
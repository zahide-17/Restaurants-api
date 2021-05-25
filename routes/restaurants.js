// Estructura del CRUD
const router = require('express').Router();
const {
  createRestaurant,
  obtainRestaurant,
  modifyRestaurant,
  removeRestaurant
} = require('../controllers/restaurants')

router.get('/', obtainRestaurant)
router.post('/', createRestaurant)
router.put('/:id', modifyRestaurant)
router.delete('/:id', removeRestaurant)

module.exports = router;
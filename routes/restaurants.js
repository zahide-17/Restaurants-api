// Estructura del CRUD
const router = require('express').Router();
const {
  createRestaurant,
  obtainRestaurant,
  modifyRestaurant,
  deleteRestaurant
} = require('../controllers/restaurants')

router.get('/', obtainRestaurant)
router.get('/:id', obtainRestaurant);
router.post('/', createRestaurant)
router.put('/:id', modifyRestaurant)
router.delete('/:id', deleteRestaurant)

module.exports = router;
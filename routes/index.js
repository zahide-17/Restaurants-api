var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to restaurant api');
});

router.use('/restaurants', require('./restaurants'));

module.exports = router;
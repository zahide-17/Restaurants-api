var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to restaurant api');
});

module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
};

router.use('/restaurants', require('./restaurants'));

module.exports = router;
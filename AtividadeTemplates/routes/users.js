var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var characters =[
    {
      name: 'Geo',
      role: 'Estudante'
    },
    {
      name: 'Toni',
      role: 'Estudante'
    },
    {
      name: 'Gerson',
      role: 'Professor'
    },
    {
      name: 'Vivi',
      role: 'Estudante'
    }
  ];
  var subheading = "Amo história";
  
  res.render('users', {characters: characters, subheading: subheading});
});

module.exports = router;
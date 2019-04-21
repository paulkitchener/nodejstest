var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res){
  res.send('  Hello world from Distelli & Docker!');
});

app.listen(PORT);
<<<<<<< HEAD
<<<<<<< HEAD
console.log('   Running on http://localhost:   ' + PORT);
=======
console.log('   Running on http://localhost:   ' + PORT);
>>>>>>> test-branch
=======
console.log('--Running on http://localhost:--' + PORT);
>>>>>>> test-branch


Parse.Cloud.define('hello', function(req, res) {
 // res.success('4');
  return '4';
});


Parse.Cloud.define('result', function(req, res) {
 res.success('こんにちは');
});


Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('result', function(req, res) {
 res.success('こんにちは');
});

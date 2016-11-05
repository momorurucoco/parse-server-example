
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('second', function(req, res) {
 res.success(parseInt('4'));
});

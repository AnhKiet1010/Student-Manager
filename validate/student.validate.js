module.exports.postCreate = function(req,res,next) {
	var errors = [];

	if (!req.body.name) {
    errors.push('名前を入力してください！');
  }
  if (!req.body.namej) {
    errors.push('名前を入力してください！');
  }
  if (!req.body.age) {
    errors.push('年齢を入力してください！');
  }
  if (!req.body.country) {
    errors.push('こくせきを入力してください！');
  }
  if (!req.body.jlpt) {
    errors.push('JLPTを入力してください！');
  }

  if (errors.length) {
    res.render('student/create', {
      errors: errors,
      values: req.body
    });
    return;
  }

  next();
}

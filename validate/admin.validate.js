module.exports.postSignup = function(req,res,next) {
	var errors = [];

	if (!req.body.username) {
    errors.push('ユーザー名を入力してください！');
  }
  if (!req.body.email) {
    errors.push('メールアドレスを入力してください！');
  }
  if (!req.body.password) {
    errors.push('パスワードを入力してください！');
  }
  if (req.body.repassword != req.body.password) {
    errors.push('パスワードが間違っています。');
  }

  if (errors.length) {
    res.render('authentication/signup', {
      errors: errors,
      values: req.body
    });
    return;
  }

  next();
}

module.exports.postLogin = function(req,res,next) {
	var errors = [];

	if (!req.body.email) {
    errors.push('メールアドレスを入力してください！');
  }
  if (!req.body.password) {
    errors.push('パスワードを入力してください！');
  }

  if (errors.length) {
    res.render('authentication/login', {
      errors: errors,
      values: req.body
    });
    return;
  }

  next();
}
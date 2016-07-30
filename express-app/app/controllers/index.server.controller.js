exports.render = function(req, res) {

  var lastVisit;

  if (req.session.lastVisit) {
    lastVisit = req.session.lastVisit;
    console.log(req.session.lastVisit);
  } else {
    lastVisit = "never."
  }

  req.session.lastVisit = new Date();

  res.render('index', {
    title: 'Hello World',
    userFullName: req.user ? req.user.fullName : ''
  });
};

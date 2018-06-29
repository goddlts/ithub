exports.showIndex = (req, res) => {
  // res.send('showIndex');
  res.render('index.html', {
    user: req.session.user
  });
};
var adminFunctions = 
	{
	pages: {},
	posts: {},
	checks: {}
	};
checks = adminFunctions.checks;
pages = adminFunctions.pages;
posts = adminFunctions.posts;

pages.main = function(req, res) {
res.send("this is the cool kids table");
};


checks.hasAccess = function hasAccess(req, res, next)
{
	if (req.isAuthenticated() && req.session.isAdmin)
	{return next();}
}
checks.notLoggedIn = function notLoggedIn(req, res, next) {
		if (!req.isAuthenticated())
		{return next();}
		
		res.redirect('/');
}

pages.signIn = function (req, res)
	{
	res.render('signIn');
	}

pages.signOut = function (req, res)
	{
	req.logout();
	res.redirect('/');
	}

posts.signIn = function (req, res)
	{
	res.redirect('/dashboard');
	}

module.exports = adminFunctions;

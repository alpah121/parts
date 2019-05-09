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

adminFunctions.notLoggedIn = function notLoggedIn(req, res, next) {
		if (!req.isAuthenticated())
		{return next();}
		
		res.redirect('/');
}

adminFunctions.signIn = function (req, res)
	{
	res.render('signIn');
	}

adminFunctions.signOut = function (req, res)
	{
	res.render('signOut');
	}

module.exports = adminFunctions;

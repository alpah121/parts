var adminFunctions = 
	{
	pages: {},
	posts: {}
	checks: {}
	};
checks = adminFunctions.checks;
pages = adminFunctions.pages;
posts = adminFunctions.posts;

function notLoggedIn(req, res, next) {
		if (!req.isAuthenticated())
		{return next();}
		
		res.redirect('/');
}


pages.main = function(req, res) {
res.send("this is the cool kids table");
};

pages.dashboard = function(req, res) {
	res.render('dashboard');
}

checks.hasAccess = function (req, res, next)
{
	if (req.isAuthenticated() && req.session.isAdmin)
	{return next();}
}

pages.signIn = function (req, res)
	{
	res.render('signIn');
	}

checks.signIn = passport.authenticate('local.signin');

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

module.exports = function (express, app) {

	app.set('showStackError', true);

	// set views path and html pre-processor (view engine), if necessary
	app.set('views', 'public');
	app.engine('html', require('ejs').renderFile);

	app.use(express.logger('tiny'));

	// call before express.static
	app.use(express.compress({
		filter: function(req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	// bodyParser call before methodOverride
	app.use(express.bodyParser());
	app.use(express.methodOverride());

	// load app router
	app.use(app.router);

	// set favicon and static directory
	app.use(express.favicon());
	app.use(express.static(__dirname + '/public'));

	// send status 500, unless error, then send 404
	app.use(function (err, req, res, next) {
		if (err) return next();
		console.error(err.stack); // log the error
		res.status(500).render('500', {
			error: err.stack
		});
	});

	// render index.html if no resource exists at the requested path
	// or if none of the defined routes match the requested resource
	app.use(function (req, res, next) {
		res.render('index.html');
	});

};
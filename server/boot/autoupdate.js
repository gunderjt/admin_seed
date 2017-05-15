module.exports = function(app, cb) {
	var dataSource = app.dataSources.mysqlDs;       
	dataSource.autoupdate(null, function (err) {
		if(err) return cb(err);
		return cb();
	});
}
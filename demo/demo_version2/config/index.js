var _ = require('lodash');

module.exports = _.merge(
	require(__dirname + '/db_config/db.js'),
	require(__dirname + '/db_config/'+process.env.NODE_ENV+'.js')||{}
);
const sp = require('./space-pirate');

module.exports = function (url) {
	return sp(null, null, 'GET', url);
};
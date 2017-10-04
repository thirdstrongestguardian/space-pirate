const sp = require('./space-pirate');

module.exports = function (url, data) {
	return sp('application/json; charset=utf-8', data, 'POST', url);
};
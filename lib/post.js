const sp = require('./space-pirate');

module.exports = function (url, json) {
	return sp('application/json; charset=utf-8', JSON.stringify(json), 'POST', url);
};
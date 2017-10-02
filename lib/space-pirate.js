var spacePirate = function (contentType, data, method, url) {
	var thenCallback;
	var thenFlag = false;
	var then = function (callback) {
		thenCallback = callback;
	
		if (thenFlag) {
			callback(http);
		}
	};

	var failCallback;
	var failFlag = false;
	var fail = function (callback) {
		failCallback = callback;
	
		if (thenFlag) {
			callback(http);
		}
	};

	var done = function () {
		if (this.readyState === 4 && this.status === 200) {
			if (typeof thenCallback === 'function') {
				thenCallback(this);
			}
	
			thenFlag = true;
			return;
		}
	
		if (typeof catchCallback === 'function') {
			catchCallback(this);
		}
	
		catchFlag = true;
		fail(this);
	};

	var http = new XMLHttpRequest();
	
	http.open(method, url, true);
	if (contentType) {
		http.setRequestHeader('Content-type', contentType);
	}
	http.onreadystatechange = done;
	http.send(data);

	return {
		then: then,
		fail: fail
	};
};

spacePirate.get = require('./get');

spacePirate.postJson = require('./post-json');

module.exports = spacePirate;


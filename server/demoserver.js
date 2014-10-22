/*global require: true, console: true, process: true */

(function (messageId, callback) {
	var _GCM = require('gcm').GCM,
	GCM = new _GCM('AIzaSyAFsOsacYehXyyadfzRd_BBs9xHh_0dRoQ'); // API KEY at Google APIs Console

	var message = {
		registration_id: 'APA91bEWiLsDLzoe7xsbBsIqf2iiYBkX7ripasgKFwjviiWHI8LR0gPDC7Jxfc-QcK-DejlyQYbSgu937aNoOoDmDvKkr6mHTEaLDYMweonLJWEdC_1srBXHTkEd0U2LBG1wyJJ8D7ej8fwbZg__O2do8HhMfVJY30qbm-tu0MODOgzRkq8iTmitGLIbn-EJF9ZxkU7fCCO',
		'data.title': 'shephard: what lies in the shadow of the statue?',
		'data.message': '4 8 15 16 23 42',
		'data.sound': 'music.mp3',
		collapse_key: messageId
	};

	GCM.send(message, function (err, messageId) {
		if (err) {
			console.error('error!');
		}
		callback(0);
	});
})((new Date()).getTime() + '', process.exit);
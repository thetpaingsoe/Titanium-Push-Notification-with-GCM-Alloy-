var gcm = require('net.iamyellow.gcmjs');

var doRegistration = function(callbacks) {
	gcm.registerForPushNotifications(callbacks);
};

var doUnregistration = function() {
	gcm.unregisterForPushNotifications();
};

var getData = function() {
	var data = gcm.data;
	return !data ? null : data;
};

var setData = function() {
	gcm.data = data;
};

var pendingData = getData();

if (pendingData !== null) {
	Ti.API.info('GCM: has pending data on START. Data is:');
	Ti.API.info(JSON.stringify(pendingData));

	alert(JSON.stringify(pendingData));
}

doRegistration({
	success: function (ev) {
		Ti.API.info('GCM success, deviceToken = ' + ev.deviceToken);
		Ti.App.Properties.setString('token', ev.deviceToken);
		
	},
	error: function (ev) {
		Ti.API.info('GCM error = ' + ev.error);
	},
	callback: function (data) {
		var dataStr = JSON.stringify(data);

		Ti.API.info('GCM notification while in foreground. Data is:');
		Ti.API.info(dataStr);

	
	},
	unregister: function (ev) {
		Ti.API.info('GCM: unregister, deviceToken =' + ev.deviceToken);
	},
	data: function (data) {
		Ti.API.info('GCM: has pending data on RESUME. Data is:');
		Ti.API.info(JSON.stringify(data)); // 'data' parameter = gcm.data

		alert(JSON.stringify(data));
		
	}
});



$.index.exitOnClose = true;
$.index.open();

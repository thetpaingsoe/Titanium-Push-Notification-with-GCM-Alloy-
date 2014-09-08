function doClick(e) {
    alert($.label.text);
}
//var pushController = require('controller');


// $.index.addEventListener('open', function(){
	// pushController.start();
// });

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
	},
	error: function (ev) {
		Ti.API.info('GCM error = ' + ev.error);
	},
	callback: function (data) {
		var dataStr = JSON.stringify(data);

		Ti.API.info('GCM notification while in foreground. Data is:');
		Ti.API.info(dataStr);

		//require('view.white').show(dataStr);
	},
	unregister: function (ev) {
		Ti.API.info('GCM: unregister, deviceToken =' + ev.deviceToken);
	},
	data: function (data) {
		Ti.API.info('GCM: has pending data on RESUME. Data is:');
		Ti.API.info(JSON.stringify(data)); // 'data' parameter = gcm.data

		alert(JSON.stringify(data));
		//require('view.green').show(data);
	}
});




/*
var sound = Titanium.Media.createSound();

//Bring in the module
var alarmModule = require('bencoding.alarmmanager');
//Create a new instance of the Alarm Manager
var alarmManager = alarmModule.createAlarmManager();

var btn5 = Ti.UI.createButton({
	title:"Alarm & Service Basic AAA", top:180, left:5, width: 150, height:75
});
$.index.add(btn5);
btn5.addEventListener('click',function(e){
	alarmManager.addAlarmService({
		//The full name for the service to be called. Find this in your AndroidManifest.xml Titanium creates
		service:'com.panaceasoft.notitestandroidandroid.NotificationService', 		
		second:3, //Set the number of minutes until the alarm should go off
		//forceRestart : true,
		interval:5000, // Create an interval service that runs each minute,
		//repeat : 200000
		//repeat:'daily'
	});	
	var ew = Ti.UI.createAlertDialog({
		title:'Info', message:"The Service provided will be started in about 2 minutes",
		buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
	});
    ew.show();		
});


// get token with cloud push module
var CloudPush = require('ti.cloudpush');

var myDeiveToken = "";

var deviceTokenSuccess = function(ee) {

	myDeiveToken = ee.deviceToken;
	Ti.App.Properties.setString('token', ee.deviceToken);
	// Cloud.PushNotifications.subscribeToken({
		// device_token : ee.deviceToken,
		// channel : "test",
		// type : Ti.Platform.name == 'android' ? 'android' : 'ios'
	// }, function(eee) {
		// if (eee.success) {
			// var notification = Titanium.Android.createNotification({
				// contentTitle : "Success ",
				// contentText : ' :D '
			// });
// 
			// Titanium.Android.NotificationManager.notify(1, notification);
// 
		// } else {
			// var notification = Titanium.Android.createNotification({
				// contentTitle : "Fail",
				// contentText : ' :D '
			// });
// 
			// Titanium.Android.NotificationManager.notify(1, notification);
		// }
	// });

};

var deviceTokenError = function(ee) {
	var notification = Titanium.Android.createNotification({
		contentTitle : ee.error,
		contentText : ' :D '
	});

	Titanium.Android.NotificationManager.notify(1, notification);

};
//if (Ti.App.Properties.hasProperty("token")) {
//var ee = [];
//ee.deviceToken = Ti.App.Properties.getString('token');
//deviceTokenSuccess(ee);
//} else {
if(! Ti.App.Properties.hasProperty("token")){
CloudPush.retrieveDeviceToken({
	success : deviceTokenSuccess,
	error : deviceTokenError
});
CloudPush.enabled = true;
}
//}

CloudPush.addEventListener('callback', function(evt) {

	Titanium.Android.NotificationManager.notify(0, // <-- this is an ID that we can use to clear the notification later
	Ti.Android.createNotification({
		contentTitle : 'Cheese, Gromit!',
		contentText : 'Swiss',
		tickerText : 'Our app made a notification!',
		contentIntent : Titanium.Android.createPendingIntent({
			intent : Titanium.Android.createIntent({
				url : 'app.js'
			})
		})
	}));

});
CloudPush.addEventListener('trayClickLaunchedApp', function(evt) {
	//Ti.API.info('Tray Click Launched App (app was not running)');
});
CloudPush.addEventListener('trayClickFocusedApp', function(evt) {
	//Ti.API.info('Tray Click Focused App (app was already running)');
});*/

$.index.open();

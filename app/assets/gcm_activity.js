/*global Ti: true, require: true */

//(function (activity, gcm) {
var gcm = require('net.iamyellow.gcmjs');
var activity = Ti.Android.currentActivity;

	var intent = activity.intent;

	if (intent.hasExtra('ntfId')) {
		gcm.data = {
			ntfId: intent.getIntExtra('ntfId', 0)
		};
	}
	
	if (gcm.isLauncherActivity) {
		var mainActivityIntent = Ti.Android.createIntent({
			className: gcm.mainActivityClassName,
			packageName: Ti.App.id,
			flags : Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED | Ti.Android.FLAG_ACTIVITY_SINGLE_TOP
		});	
		mainActivityIntent.addCategory(Ti.Android.CATEGORY_LAUNCHER);
		activity.startActivity(mainActivityIntent);
	}
	else {
		activity.finish();
	}

//})(Ti.Android.currentActivity, require('net.iamyellow.gcmjs'));
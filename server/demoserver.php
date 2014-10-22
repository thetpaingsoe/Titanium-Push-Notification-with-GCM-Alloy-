<?php
    // currenct my application token
    $deviceToken = 'APA91bEuAknzbUn7EWDfL20C5bEVMkqhnINwEFwnpJkvTTU7S5Gpx6JmoTe9q1W4XFVRbKwcqO-_EbKNkNzyAtsV8dyKrKxFJput9fR6FMZjsm6mYJ6ws_tcrAyL7ug7v6JZ0pt7ZH5bP5LIMFnULl_QJ4f-q1lg';
    
    // gcm app key from google
    $yourKey = 'AIzaSyAFsOsacYehXyyadfzRd_BBs9xHh_0dRoQ';
    $collapseKey = '1';
    $messageText = 'Hello I am noti';
    function sendMessageToPhone($deviceToken, $collapseKey, $messageText, $yourKey)
    {
        $headers = array('Authorization:key=' . $yourKey);
        $data = array(
                      'registration_id' => $deviceToken,
                      'collapse_key' => $collapseKey,
                      'data.message' => $messageText);
        
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, "https://android.googleapis.com/gcm/send");
        if ($headers)
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if (curl_errno($ch)) {
            //request failed
            return false;//probably you want to return false
        }
        if ($httpCode != 200) {
            //request failed
            return false;//probably you want to return false
        }  
        curl_close($ch);  
        return $response;  
    }
    
    sendMessageToPhone($deviceToken,$collapseKey, $messageText, $yourKey);
    
    ?>
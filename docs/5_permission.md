## Permissions

git : https://github.com/zoontek/react-native-permissions

참조 : 
https://flamingotiger.github.io/frontend/ReactNative/react-native-permissions/
https://0biglife.tistory.com/entry/%EC%95%B1-%EA%B6%8C%ED%95%9C%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B2%83
https://velog.io/@dalbodre_ari/%EC%9A%B0%EC%95%84%ED%95%98%EA%B2%8C-react-native-%EA%B6%8C%ED%95%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0



## 1. 

npm install react-native-permissions

### podfile
```
target 'YourAwesomeProject' do

  # …
  permissions_path = '../node_modules/react-native-permissions/ios'

  pod 'Permission-AppTrackingTransparency', :path => "#{permissions_path}/AppTrackingTransparency"
  pod 'Permission-BluetoothPeripheral', :path => "#{permissions_path}/BluetoothPeripheral"
  pod 'Permission-Calendars', :path => "#{permissions_path}/Calendars"
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera"
  pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts"
  pod 'Permission-FaceID', :path => "#{permissions_path}/FaceID"
  pod 'Permission-LocationAccuracy', :path => "#{permissions_path}/LocationAccuracy"
  pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways"
  pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"
  pod 'Permission-MediaLibrary', :path => "#{permissions_path}/MediaLibrary"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone"
  pod 'Permission-Motion', :path => "#{permissions_path}/Motion"
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
  pod 'Permission-PhotoLibraryAddOnly', :path => "#{permissions_path}/PhotoLibraryAddOnly"
  pod 'Permission-Reminders', :path => "#{permissions_path}/Reminders"
  pod 'Permission-Siri', :path => "#{permissions_path}/Siri"
  pod 'Permission-SpeechRecognition', :path => "#{permissions_path}/SpeechRecognition"
  pod 'Permission-StoreKit', :path => "#{permissions_path}/StoreKit"

end

```   

### info.plist
```

  <key>NSAppleMusicUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSBluetoothAlwaysUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSBluetoothPeripheralUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSCalendarsUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSCameraUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSContactsUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSFaceIDUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSLocationAlwaysUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSLocationTemporaryUsageDescriptionDictionary</key>
  <dict>
    <key>YOUR-PURPOSE-KEY</key>
    <string>YOUR TEXT</string>
  </dict>
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSMicrophoneUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSMotionUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSPhotoLibraryUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSPhotoLibraryAddUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSRemindersUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSSpeechRecognitionUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSSiriUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSUserTrackingUsageDescription</key>
  <string>YOUR TEXT</string>

```   



### AndroidManifest.xml
```

  <uses-permission android:name="android.permission.ACCEPT_HANDOVER" />
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_MEDIA_LOCATION" />
  <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
  <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
  <uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />
  <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
  <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
  <uses-permission android:name="android.permission.BODY_SENSORS" />
  <uses-permission android:name="android.permission.CALL_PHONE" />
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.GET_ACCOUNTS" />
  <uses-permission android:name="android.permission.PROCESS_OUTGOING_CALLS" />
  <uses-permission android:name="android.permission.READ_CALENDAR" />
  <uses-permission android:name="android.permission.READ_CALL_LOG" />
  <uses-permission android:name="android.permission.READ_CONTACTS" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.READ_PHONE_NUMBERS" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.READ_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_MMS" />
  <uses-permission android:name="android.permission.RECEIVE_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_WAP_PUSH" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.SEND_SMS" />
  <uses-permission android:name="android.permission.USE_SIP" />
  <uses-permission android:name="android.permission.WRITE_CALENDAR" />
  <uses-permission android:name="android.permission.WRITE_CALL_LOG" />
  <uses-permission android:name="android.permission.WRITE_CONTACTS" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  <uses-permission android:name="com.android.voicemail.permission.ADD_VOICEMAIL" />

```



2. 사용
```

import {PERMISSIONS, RESULTS, requestMultiple} from 'react-native-permissions';

const androidPermissions = [
    PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
];

const iosPermissions = [
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY
];

const getPermissions = ( navigation ) => {

    const permissions = Platform.OS === 'android'? androidPermissions : iosPermissions;

    requestMultiple(permissions).then((statuses) => {
        if (Platform.OS === 'android') {
            console.log('ACCESS_COARSE_LOCATION', statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]);
            console.log('CAMERA', statuses[PERMISSIONS.ANDROID.CAMERA]);
            console.log('READ_EXTERNAL_STORAGE', statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);
            console.log('WRITE_EXTERNAL_STORAGE', statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);

            if (statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] === RESULTS.GRANTED 
                && statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.GRANTED 
                && statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] === RESULTS.GRANTED 
                && statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === RESULTS.GRANTED) {

                navigation.goBack(null);

            } else if (statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] === RESULTS.BLOCKED
                || statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.BLOCKED 
                || statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] === RESULTS.BLOCKED
                || statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === RESULTS.BLOCKED) {

                goSetting();

            } else {
                setBackButtonAction(navigation);
            }
        } else {
            console.log('LOCATION_WHEN_IN_USE', statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);
            console.log('CAMERA', statuses[PERMISSIONS.IOS.CAMERA]);
            console.log('PHOTO_LIBRARY', statuses[PERMISSIONS.IOS.PHOTO_LIBRARY]);

            if (statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === RESULTS.GRANTED 
                && statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.GRANTED 
                && statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === RESULTS.GRANTED) {

                navigation.goBack(null);

            } else if (statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] === RESULTS.BLOCKED
                || statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.BLOCKED 
                || statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === RESULTS.BLOCKED) {

                goSetting();

            } else {
                setBackButtonAction(navigation);
            }
        }
    });
}
```



3. blocked 일때, 설정으로 보내버리기
```

    Alert.alert(
        "blocked",
        "go to setting and unblock it",
        [
          { text: 'no', style: 'cancel' },
          { text: 'ok', onPress: Linking.openSettings },
        ]
      );
      
```
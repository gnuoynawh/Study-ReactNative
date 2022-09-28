## SplashScreen

git : https://github.com/crazycodeboy/react-native-splash-screen

참조 : https://blog.logrocket.com/building-a-splash-screen-in-react-native/
      https://ingg.dev/rn-splash/

아이콘 출처 : https://www.freepik.com/free-icon/tree_15513842.htm#page=2&query=tree&position=26&from_view=search


## 1. react-native

- 로컬에 라이브러리 추가
```
npm add react-native-splash-screen

cd ios 

pod install / pod update

cd ..
```

- App.js 에 스플래시 화면 숨기는 코드 삽입
```
...

import SplashScreen from 'react-native-splash-screen';

...

class App extends React.Component {

  // useEffect 로 해도 되는데, 
  // componentDidMount로 하는게 좀더 매끄러운 느낌
  // 스플래시 숨김
  componentDidMount() {
    SplashScreen.hide();
  }

  ...

}

```


## 2. android

- icon 추가

    android/app/src/main/res/drawable/[icon]

    또는 아이콘 사이즈에 맞춰서 mipmap 에 넣어준다.

    x1 - mipmap-mdpi
    x2 - mipmap-hdpi
    x3 - mipmap-xhdpi, mipmap-xxhdpi, mipmap-xxxhdpi

- launch_screen.xml 추가

    android/app/src/main/res 밑에 layout 폴더 생성.
    launch_screen.xml 파일 생성 후 아래 코드 작성

```
    <?xml version="1.0" encoding="utf-8"?>
    <RelativeLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent">
        <ImageView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_centerInParent="true"
            android:src="@mipmap/ic_tree"/>
    </RelativeLayout>
```

- 스플래시 코드 삽입

    android/app/src/main/java/com/practiceproject/MainActivity.java
    아래 볼드 부분 추가

```
    package com.practiceproject;

    ***import android.os.Bundle;***
    import com.facebook.react.ReactActivity;
    import com.facebook.react.ReactActivityDelegate;
    import com.facebook.react.ReactRootView;

    ***import org.devio.rn.splashscreen.SplashScreen;***

    public class MainActivity extends ReactActivity {

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            ***SplashScreen.show(this);***
            super.onCreate(savedInstanceState);
        }

    ...

    }

```

## 3. ios

Xcode 로 ios 프로젝트 내 proejct명.xcworkspace 실행

- 코드 추가

```
#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import <React/RCTAppSetupUtils.h>

// Import RNSplashScreen
***#import "RNSplashScreen.h"***

#if RCT_NEW_ARCH_ENABLED
#import <React/CoreModulesPlugins.h>
#import <React/RCTCxxBridgeDelegate.h>
#import <React/RCTFabricSurfaceHostingProxyRootView.h>
#import <React/RCTSurfacePresenter.h>
#import <React/RCTSurfacePresenterBridgeAdapter.h>
#import <ReactCommon/RCTTurboModuleManager.h>

#import <react/config/ReactNativeConfig.h>

static NSString *const kRNConcurrentRoot = @"concurrentRoot";

@interface AppDelegate () <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate> {
  RCTTurboModuleManager *_turboModuleManager;
  RCTSurfacePresenterBridgeAdapter *_bridgeAdapter;
  std::shared_ptr<const facebook::react::ReactNativeConfig> _reactNativeConfig;
  facebook::react::ContextContainer::Shared _contextContainer;
}
@end
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
  ...

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  ...
  
  ***[RNSplashScreen show];***

  return YES;
}

```

- icon 추가

    프로젝트 내 images.xcassets 을 연다.
    하단 + 버튼으로 ImageSet 추가
    1x,2x,3x 사이즈에 맞춘 이미지 파일 추가

- LaunchScreen.storyboard

    LaunchScreen.storyboard 파일을 연다.
    기존 view 삭제 후 imageView 를 추가해준다.
    우측 설정에서 image 를 위에서 추가한 아이콘으로 설정해준다.
    content mode 는 aspect fit 으로 설정

- 메뉴 Product > Build 를 실행
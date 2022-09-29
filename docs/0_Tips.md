## Tips


- Android Rebuild in ReactNative terminal

```
    cd android
    ./gradlew clean
    cd ..
    npx react-native run-android
```

- 벡터 아이콘
  - 깃 : https://github.com/oblador/react-native-vector-icons
  - 이미지들 : https://oblador.github.io/react-native-vector-icons/
  - ios 참고 : https://dlee0129.tistory.com/10
  - 안드로이드 참고 : https://devbksheen.tistory.com/entry/%EB%B0%B1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98Vector-Icons-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
  - android
    - ./app/build.gradle 에 아래 문구추가
```
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

  - ios
    - ./node_modules/react-native-vector-icons/Fonts 폴더를 ios 프로젝트 폴더에 리소스로 복사해줌.
    - Podfile에 아래 문구 추가
```
  pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```
    - info.plist 를 열고 아래 리스트를 추가 해줌
```
<key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>Feather.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>Zocial.ttf</string>
	</array>
```

- 화면이동시

### push​
Pushes a new screen to top of the stack and navigate to it. The method accepts following arguments:

name - string - Name of the route to push onto the stack.
params - object - Screen params to pass to the destination route.
Try this example on Snack 

```
navigation.push('Profile', { owner: 'Michaś' });

```
### pop​
Pops the current screen from the stack and navigates back to the previous screen. It takes one optional argument (count), which allows you to specify how many screens to pop back by.

Try this example on Snack 

```
navigation.pop();

```
### popToTop​
Pops all of the screens in the stack except the first one and navigates to it.

Try this example on Snack 

```
navigation.popToTop();

```
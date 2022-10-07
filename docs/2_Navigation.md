## Navigation

git : https://github.com/react-navigation/react-navigation

참조 : https://reactnavigation.org/docs/stack-navigator/

https://conansjh20.tistory.com/76

## 공통

- 공통
  - react-native-gesture-handler
  - react-native-screens
  - react-native-safe-area-context
  - @react-native-community/masked-view

- react-native-reanimated (drawer 에 필요)
- @react-navigation/native (네비 공통)
- @react-navigation/stack (스택)
- @react-navigation/bottom-tabs (바텀 탭)
- @react-navigation/drawer (드로우어)

- 로컬에 라이브러리 추가
```
npm install react-native-gesture-handler react-native-reanimated @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer react-native-screens react-native-safe-area-context @react-native-community/masked-view

cd ios 

pod install / pod update

cd ..
```


- reanimated 에서 오류가 날 수 있음.

    babel.config.js 파일에 내용에 아래 내용을 추가

```   
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      "react-native-reanimated/plugin"
    ]
};
```

## 스택

아래와 같은 형태로 작업
initialRouteName 는 이 스택 네비게이션의 시작할 스크린

스크린의 name 과 component 는 필수로 넣어준다.
옵션은 options={{ headerShown: false, headerTransparent:true }} 와 같이 다양하게 있으며, 현재 헤더를 없애는 설정을 추가해둠.

```
// import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import PermissionScreen from './src/screen/PermissionScreen';
import SignInScreen from './src/screen/SignInScreen';
import MainScreen from './src/screen/MainScreen';

// 변수 지정
const Stack = createStackNavigator();

return(
      <NavigationContainer styles={{flex: 1}}>
        <Stack.Navigator initialRouteName='PermissionScreen' >
          <Stack.Screen name='PermissionScreen' component={ PermissionScreen } options={{ headerShown: false, headerTransparent:true }} />
          <Stack.Screen name='SignInScreen' component={ SignInScreen } options={{ headerShown: false, headerTransparent:true }} />
          <Stack.Screen name='MainScreen' component={ MainScreen } options={{ headerShown: false, headerTransparent:true }} />
        </Stack.Navigator>
      </NavigationContainer>
    )

```

- 바텀탭 아이콘 변경

>>> react-native-vector-icons 

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

                {/* Bottom-Tab */}
                <Tab.Navigator 
                    initialRouteName='HomeScreen'
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        headerTransparent:true,
                        tabBarActiveTintColor: '#0F49BA',
                        tabBarInactiveTintColor: 'gray',
                        tabBarIcon: ({ color, size }) => {
                            if (route.name === 'Home') {
                                return <MaterialCommunityIcons name='home' color={color} size={size}/>
                            } else if (route.name === 'History') {
                                return <MaterialCommunityIcons name='history' color={color} size={size}/>
                            } else {
                                return <MaterialCommunityIcons name='calendar-clock' color={color} size={size}/>
                            }
                        }
                    })}
                    listeners={({ route }) => ({
                        tabPress: (e) => {
                            if (route.name === 'Home') {
                                this.setState({ headerTitle: 'Home' });
                            } else if (route.name === 'History') {
                                this.setState({ headerTitle: 'History' });
                            } else {
                                this.setState({ headerTitle: 'Reservation' });
                            }
                        },
                    })}>
                    <Tab.Screen name='Home' component={ HomeScreen } options={{ tabBarLabel: 'Home' }} />
                    <Tab.Screen name='History' component={ HistoryScreen } options={{ tabBarLabel: 'History' }} />
                    <Tab.Screen name='Reservation' component={ ReservationScreen } options={{ tabBarLabel: 'Reservation' }} />
                </Tab.Navigator>

```
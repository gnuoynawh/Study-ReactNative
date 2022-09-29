## Exit

reference : https://reactnative.dev/docs/backhandler#exitapp

참조 : https://stackoverflow.com/questions/34801664/how-do-i-exit-shut-down-a-react-native-app


```

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", setBackButtonAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", setBackButtonAction);
    }


    const setBackButtonAction = () => {
        Alert.alert(
            "Hold on!",
            "Are you sure you want to go back?", 
            [
                { text: "Cancel", onPress: () => null, style: "cancel" },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]
        );
        return true;
    };
    
```
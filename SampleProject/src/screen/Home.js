import 'react-native-gesture-handler'
import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return(
    <View>
      <Text>Hello! HomeScreen</Text>
      <Button
          title='go User'
          onPress={() => {
            navigation.navigate('User');
          }}/>
    </View>
  )
}
export default HomeScreen;
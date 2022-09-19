import 'react-native-gesture-handler'
import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function UserScreen() {
  const navigation = useNavigation();

  return(
    <View>
      <Text>Hello! UserScreen</Text>
      <Button
          title='go Home'
          onPress={() => {
            navigation.navigate('Home');
          }}/>
    </View>
  )
}
export default UserScreen;

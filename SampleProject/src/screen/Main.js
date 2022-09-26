import 'react-native-gesture-handler'
import React, { Component } from 'react';

// import
import { 
  StyleSheet, View, Text, Button,
  TitleContainer, Title, SubTitle, IonIcon, 
  SubscriptionWrapper, SubscriptionView, SubScriptionText,
  ButtonContainer, ButtonText
} from 'react-native';
import {PERMISSIONS, RESULTS, request, requestMultiple} from 'react-native-permissions';


function requestMultiplePermissions() {
  if (Platform.OS === 'android') {
    //request(
    requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    ]).then((result) => {
      console.log('askPermission', `result : ${result}`);
    });  
  } else {
    //request(
    requestMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.READ_EXTERNAL_STORAGE,
      PERMISSIONS.IOS.WRITE_EXTERNAL_STORAGE
    ]).then((result) => {
      console.log('askPermission', `result : ${result}`);
    });
  }
};

// class Main extends Component {
//   render() {
//     return(
//       <View>
//         <TitleContainer>
//           <Title>접근 권한 승인</Title>
//           <SubTitle>해당 서비스 이용을 위한 접근 권한을 허용합니다.</SubTitle>
//         </TitleContainer>
//       </View>
//     );
//   }
// }
// export default Main();

function Main({ navigation }) {
  return(
    <View>
      <Text>접근 권한 승인</Text>
      <Button title="권한" onPress={requestMultiplePermissions()}></Button>
    </View>
  )
}
export default Main;

  //   <View>
  //     <TitleContainer>
  //       <Title>접근 권한 승인</Title>
  //       <SubTitle>해당 서비스 이용을 위한 접근 권한을 허용합니다.</SubTitle>
  //       <SubscriptionWrapper>
  //         <SubscriptionView>
  //           <IonIcon name="phone-portrait" size={22} color="gray" />
  //           <SubScriptionText>연락처 접근 권한을 허용합니다.</SubScriptionText>
  //         </SubscriptionView>
  //         <SubscriptionView>
  //           <IonIcon name="camera" size={22} color="gray" />
  //           <SubScriptionText>카메라 접근 권한을 허용합니다.</SubScriptionText>
  //         </SubscriptionView>
  //         <SubscriptionView>
  //           <IonIcon name="book" size={22} color="gray" />
  //           <SubScriptionText>갤러리 접근 권한을 허용합니다.</SubScriptionText>
  //         </SubscriptionView>
  //         <SubscriptionView>
  //           <IonIcon name="mic" size={22} color="gray" />
  //           <SubScriptionText>마이크 접근 권한을 허용합니다.</SubScriptionText>
  //         </SubscriptionView>
  //         <ButtonContainer onPress={() => requestMultiplePermissions()}> //권한 요청
  //           <ButtonText>권한 허용</ButtonText>
  //         </ButtonContainer>
  //       </SubscriptionWrapper>
  //     </TitleContainer>
  //   </View>

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});



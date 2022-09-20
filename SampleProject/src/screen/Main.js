import 'react-native-gesture-handler'
import React, { Component } from 'react';

// import
import { 
  StyleSheet, View, Text, 
  TitleContainer, Title, SubTitle, IonIcon, 
  SubscriptionWrapper, SubscriptionView, SubScriptionText,
  ButtonContainer, ButtonText
} from 'react-native';
import {request, requestMultiple, PERMISSIONS} from 'react-native-permissions';


const requestPermission = () => {
  request(PERMISSIONS.IOS.CAMERA).then(response => {
    console.log(response);
  });
};

//허용된 권한에 대한 체킹 + logging
const checkPermission = () => {//checkMultiple을 쓸거면 이 부분 생략 가능
  check(PERMISSIONS.IOS.CAMERA)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      console.log('PERMISSION ERROR : ', error);
    });
};

const requestMultiplePermissions = () => {
  requestMultiple([
    PERMISSIONS.IOS.CONTACTS,
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
    PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
    PERMISSIONS.IOS.MICROPHONE,
  ]).then(response => {
    console.log('MULTIPLE REQUEST RESPONSE : ', response);
  });
};

const checkMultiplePermissions = () => {
  checkMultiple([
    PERMISSIONS.IOS.CONTACTS,
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
    PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
    PERMISSIONS.IOS.MICROPHONE,
  ]).then(response => {
    console.log('MULTIPLE CHECK RESPONSE : ', response);
  });
};

class Main extends Component {

  render() {
    
    return (
      <View>
        <TitleContainer>
          <Title>접근 권한 승인</Title>
          <SubTitle>해당 서비스 이용을 위한 접근 권한을 허용합니다.</SubTitle>
          <SubscriptionWrapper>
            <SubscriptionView>
              <IonIcon name="phone-portrait" size={22} color="gray" />
              <SubScriptionText>연락처 접근 권한을 허용합니다.</SubScriptionText>
            </SubscriptionView>
            <SubscriptionView>
              <IonIcon name="camera" size={22} color="gray" />
              <SubScriptionText>카메라 접근 권한을 허용합니다.</SubScriptionText>
            </SubscriptionView>
            <SubscriptionView>
              <IonIcon name="book" size={22} color="gray" />
              <SubScriptionText>갤러리 접근 권한을 허용합니다.</SubScriptionText>
            </SubscriptionView>
            <SubscriptionView>
              <IonIcon name="mic" size={22} color="gray" />
              <SubScriptionText>마이크 접근 권한을 허용합니다.</SubScriptionText>
            </SubscriptionView>
            <ButtonContainer onPress={() => requestMultiplePermissions()}> //권한 요청
              <ButtonText>권한 허용</ButtonText>
            </ButtonContainer>
          </SubscriptionWrapper>
        </TitleContainer>
      </View>
    );
  }
}
export default Main();

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});



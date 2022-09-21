import React, { useRef, useCallback, useState } from 'react';

// import
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LoadingView from 'react-native-loading-view';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

function CameraTest() {

  const cameraRef = React.useRef();
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const onCameraInitialized = useCallback(() => {
    console.log('Camera initialized!');
    setIsCameraInitialized(true);
  }, []);

  const handleCapture = useCallback(async () => {
    try {
      
      console.log("Click Me!");

      if(cameraRef && cameraRef.current && isCameraInitialized) {
  
        const img = await cameraRef.current.takePhoto({
          enableAutoStabilization: true,
          skipMetadata: true,
          photoCodec: 'jpeg',
          quality: 100,
        });
        
        console.log(img);
      }
    
    } catch (error) {
      
      console.log("Error!");
      console.log({error});
  
    }
  },[cameraRef, isCameraInitialized]);

  if (device == null)
    return <LoadingView />

  return(
    <View style={{flex: 1}}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        onInitialized={onCameraInitialized}
        device={device}
        isActive={true}
        enableZoomGesture={false}
        photo={true}
        orientation="portrait"/>

      <View>
        <TouchableOpacity 
          style={{width: 100, height: 100, backgroundColor: 'white', justifyContent: 'center'}}
          onPress={handleCapture}>
              <Text>Click me</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
export default CameraTest;

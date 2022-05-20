import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import {firebase} from "../firebase"

const VoiceRecorder =()=>{
const [recording, setRecording] = React.useState();
const Separator = () => (
  <View style={styles.separator} />
);
async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync(); 
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }
  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    console.log('Recording stopped and stored at', uri);
  }

  async function saveToFirebase(){
    
       firebase.database().ref('/Recordings')
       .set({
         Sound:"sound"
       }).then(()=>console.log("done"))
  }

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      <Separator />
      <Button
        style={styles.button}
        title={'Save Recording'}
        onPress={()=>saveToFirebase()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 10,
    },
    button: {
      marginVertical: 8,
      marginTop:30,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

  export default VoiceRecorder
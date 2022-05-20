import React from 'react';
import {requireNativeComponent, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import MapView from 'react-native-maps';
const Separator = () => (
  <View style={styles.separator} />
);

const PanicButton = () => {
    const navigation = useNavigation();
return(
  <SafeAreaView style={styles.container}>
    <View>

      <Button
        title="Protocols"
        onPress={() =>  navigation.navigate("Protocols")}

      />
    </View>
    <Separator />
    <View>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />

    <View>
    
      <View style={styles.fixToText}>
        <Button
          title="Record Emergency"
          onPress={() => navigation.navigate("VoiceRecorder")}
        />
      </View>
    </View>
    <Separator/>
    <View style={styles.MapStyle}>
      
                <MapView style={styles.map} 
               
              ></MapView>
            </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  map:{
    position:"absolute",
    top:0,
    left:0,
    bottom:0,
    right:0,
},
MapStyle:{
  flex: 1,
  
  marginTop:50,
  justifyContent: 'center',
}

});

export default PanicButton
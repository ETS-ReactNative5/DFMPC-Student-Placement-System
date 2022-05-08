import React, {  useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getSchedule} from './RetrieveSchedules'

const Schedules =
()=>{
   
  ;


  const[state,setState]=useState({scheduleList: [{key1:0,
  created_at:"",
  hospital:"",
  ID:"",
  specialty_duration:"",
  specialty_id:"",
  student_id:"",
  updated_at:"",
  week_no:"",
  }]}) 

  const onReceive = (scheduleList) => {
   
    setState(prevState => ({
      scheduleList: prevState.scheduleList = scheduleList,
      
    }));
  }

  useEffect(()=>{
    getSchedule(onReceive)
  },[state])

    

    return (
  
      <SafeAreaView style={{flex:1}}>
        <View style ={styles.container}>
          
          <ScrollView style ={styles.container} >
              {
                state.scheduleList.map((item,key)=>(
                
                  <View>
                  <TouchableOpacity style = {styles.item} >
                   
                    <Text style={styles.itemText}>
                      {item.created_at}
                    </Text>
                    
                    
                  </TouchableOpacity>
                
                      <Text>{item.specialty_duration}</Text>
                  
                      <Text>{item.hospital}</Text>
            
                      <Text>{item.specialty_id}</Text>
               
                      <Text>{item.student_id}</Text>
                  
                
                      <Text>{item.specialty_duration}</Text>
              
                      <Text>{item.updated_at}</Text>
                      <Text>{item.week_no}</Text>
                  
                </View>

                )

                )
              }
          </ScrollView>
        </View>


      </SafeAreaView>  
       )
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'cream',
  },
  header:{
  flexDirection:'row',
  padding:10,
  },
  item:{
    backgroundColor:'cream',
    padding:20,
  },
  itemText:{
    fontSize: 16,
    fontWeight:'500',
    color:'darkblue'


  },
  contentHide: {
    cursor: 'pointer',
    backgroundColor: 'lightblue',
    overflow: "hidden",
    maxHeight: 0

  },
  content_show:{
    cursor:'pointer',
    backgroundColor:'lightblue',
    marginBottom:10,
    marginTop:10,
    padding:30,
    opacity: 1,
    maxHeight:9999,
    transition:'opacity 1s linear'

  }
});
export default Schedules;
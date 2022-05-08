import React, {  useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getList} from './ListApi'

const Protocols =
()=>{
   
<<<<<<< HEAD:project/Screens/Protocols.js
  const[state,setState]=useState({protocolList: [{key:0,Protocol:"",content:""}]})
=======
  const[state,setState]=useState({protocolList: [{
    key:0,Protocol:"",
    content:""}]})
>>>>>>> CallumNewBranch:Screens/Protocols.js
  
  
  const onReceive = (protocolList) => {
   
    setState(prevState => ({
      protocolList: prevState.protocolList = protocolList,
      
    }));
  }
  getList(onReceive)
<<<<<<< HEAD:project/Screens/Protocols.js

=======
  console.log(state.protocolList)
>>>>>>> CallumNewBranch:Screens/Protocols.js
    
  const[selected,setSelected]=useState(null)

  const toogle=i=>{
    if(selected==i){
      return setSelected(null)
    }
    setSelected(i)
  }

    return (
  
      <SafeAreaView style={{flex:1}}>
        <View style ={styles.container}>
          
          <ScrollView style ={styles.container} >
              {
                state.protocolList.map((item,key)=>(
                
                  <View>
                  <TouchableOpacity style = {styles.item} onPress={()=>toogle(key)} >
                   
                    <Text style={styles.itemText}>
                      {item.Protocol}
                    </Text>
                    <Text style={styles.itemText}>
                      {selected===key?"-":"+"}
                    </Text>
                    
                  </TouchableOpacity>
                  <View style={selected===key? styles.content_show:styles.contentHide}>
<<<<<<< HEAD:project/Screens/Protocols.js
                      <Text>{item.content}</Text>
=======
                      <Text style={{color:'white',}}>{item.content}</Text>
>>>>>>> CallumNewBranch:Screens/Protocols.js
                  </View>
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
<<<<<<< HEAD:project/Screens/Protocols.js
    backgroundColor:'cream',
=======
    backgroundColor:'rgba(18,33,65,0.8)',
>>>>>>> CallumNewBranch:Screens/Protocols.js
  },
  header:{
  flexDirection:'row',
  padding:10,
  },
  item:{
<<<<<<< HEAD:project/Screens/Protocols.js
    backgroundColor:'cream',
=======
    backgroundColor:'rgba(18,33,65,0.8)',
>>>>>>> CallumNewBranch:Screens/Protocols.js
    padding:20,
  },
  itemText:{
    fontSize: 16,
    fontWeight:'500',
<<<<<<< HEAD:project/Screens/Protocols.js
    color:'darkblue'
=======
    color:'white'
>>>>>>> CallumNewBranch:Screens/Protocols.js


  },
  contentHide: {
<<<<<<< HEAD:project/Screens/Protocols.js
    cursor: 'pointer',
    backgroundColor: 'lightblue',
=======
    color:'white',
    backgroundColor: 'rgba(44,59,92,255)',
>>>>>>> CallumNewBranch:Screens/Protocols.js
    overflow: "hidden",
    maxHeight: 0

  },
  content_show:{
<<<<<<< HEAD:project/Screens/Protocols.js
    cursor:'pointer',
    backgroundColor:'lightblue',
=======
    color:'white',
    backgroundColor:'rgba(44,59,92,255)',
>>>>>>> CallumNewBranch:Screens/Protocols.js
    marginBottom:10,
    marginTop:10,
    padding:30,
    opacity: 1,
    maxHeight:9999,
<<<<<<< HEAD:project/Screens/Protocols.js
    transition:'opacity 1s linear'
=======
   
>>>>>>> CallumNewBranch:Screens/Protocols.js

  }
});
export default Protocols;
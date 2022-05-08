import {firebase} from "../firebase"
<<<<<<< HEAD:project/Screens/ListApi.js
import 'react-native-get-random-values';
=======

>>>>>>> CallumNewBranch:Screens/ListApi.js
import { v4 as uuidv4 } from 'uuid';



export async function getList(onReceiveList) {

  var protocols = []
<<<<<<< HEAD:project/Screens/ListApi.js

=======
  
>>>>>>> CallumNewBranch:Screens/ListApi.js

  var snapshot = await firebase.firestore()
    .collection('emergency_protocols')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(function (doc) {
        protocols.push({key:protocols.length+1,Protocol: doc.id,content:doc.data().protocol_1});
      })
<<<<<<< HEAD:project/Screens/ListApi.js
     
=======

>>>>>>> CallumNewBranch:Screens/ListApi.js
    })

  onReceiveList(protocols);
}



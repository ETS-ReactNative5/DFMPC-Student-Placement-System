import {firebase} from "../firebase"
import {authUserID} from './Login'
import { v4 as uuidv4 } from 'uuid';


const user_id = authUserID;


export async function getSchedule(onReceiveList) {

    var schedules = [] // Create empty array to store all items in database
    const docRef = firebase.firestore().collection("schedules");
    var snapshot = await docRef.where("student_id", "==", user_id).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
      
      snapshot.forEach(function(doc) {
        schedules.push({key1: schedules.length + 1,
        created_at:doc.data().created_at,
        hospital_ID:doc.data().hospital_id,
        ID:doc.data().id,
        specialty_duration:doc.data().specialty_duration,
        specialty_id:doc.data().specialty_id,
        student_id:doc.data().student_id,
        updated_at:doc.data().updated_at,
        start_date:doc.data().start_date,
        end_date: doc.data().end_date,
        SpecialtyName:doc.data().SpecialtyName
        })
      })
   onReceiveList(schedules);
  }
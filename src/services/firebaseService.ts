// Your web app's Firebase configuration
import {child, get, push, ref} from "@firebase/database";
import StartFirebaseRealtimeDb from "./firebaseConfig/firebase-config";
import {contactFormConvertor, ContactformDTO} from "../data/contactformDTO";
import StartFirebaseFirestore from "./firebaseConfig/firebase-config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const _db_realtime = StartFirebaseRealtimeDb();
const _db_firestore = StartFirebaseFirestore();

export class firebaseService {

  static writeContactFormToFirestore(
    name: any,
    email: any,
    subject: any,
    message: any
  ) {

    const ref = doc(_db_firestore, 'contactform',Date.now().toString()).withConverter(contactFormConvertor);
    const data = new ContactformDTO(
      name,
      email,
      subject,
      message
    )
    console.log(data)
    setDoc(ref, data)
      alert(data._name + ", thanks for your message!")

    // .then(() => {
    //   alert(contactform._name + ", thanks for your message!")
    // }).catch((error) => {
    //   alert('datastore unsuccesfull, error: ' + error)
    // })

  }

  static readAllContactFormDataToFirebase() {
    console.log('readContactFormDataToFirebase reached');
    // get(ref(_db_realtime,
    //   "/contact-requests/")).then((snapshot) => {    //TODO fix username properly
    //   if (snapshot.exists()) {
    //
    //     console.log('data retrieved succesfully');
    //     let data = snapshot.val();
    //     console.log(snapshot.val())
    //     return data;
    //   }
    //
    //   // let newData = data.stream.foreach((line: { constructor: reisDTO; }) => line.constructor)
    // }).catch((error) => {
    //   alert('datastore unsuccesfull, error: ' + error)
    //   return null;
    // })
  }

}


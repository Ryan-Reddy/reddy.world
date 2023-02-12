// Your web app's Firebase configuration
import {contactFormConvertor, ContactFormDTO} from "../data/ContactFormDTO";
import StartFirebaseFirestore from "./firebaseConfig/firebase-config";
import { collection, addDoc, doc, getDoc, getDocs } from "firebase/firestore";

const _db_firestore = StartFirebaseFirestore();

export class firebaseService {

  static async writeContactFormToFirestore(
    name: any,
    email: any,
    subject: any,
    message: any,
    date: any
  ) {

    // const ref = doc(_db_firestore, 'contactform',Date.now().toString()).withConverter(contactFormConvertor);
    const data = new ContactFormDTO(
      name,
      email,
      subject,
      message,
      date
    )
    console.log(data)
    addDoc(collection(_db_firestore, 'mail').withConverter(contactFormConvertor), data)
      .then((docRef) => {
        alert(data._name + ", thanks for your message!")
        console.log("Document written with ID: ", docRef.id); // auto generated id, could be returned and saved!
      }).catch((error) => {
      alert('datastore unsuccesfull, error: ' + error)
    })
  }

  static readSingleContactFromDatabase(id: string) {
    console.log(this.readSingleContactFromDatabase);
    const ref = doc(_db_firestore, "mail",id).withConverter(contactFormConvertor);
    getDoc(ref)
      .then((docSnap) => {    //TODO fix username properly
        if (docSnap.exists()) {
          console.log('data retrieved succesfully');
          let data = docSnap.data();
          console.log(data)
          return data;
        }
      }).catch((error) => {
      alert('datastore unsuccesfull, error: ' + error)
      return null;
    })
  }

  static async getAllDocs() {
    console.log(this.getAllDocs);
    const querySnapshot = await getDocs(collection(_db_firestore, "mail"));

    const mailsMap = new Map();

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      mailsMap.set(doc.id, doc.data())
    })


    return mailsMap;
  }
}


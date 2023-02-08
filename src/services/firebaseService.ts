// Your web app's Firebase configuration
import {child, get, push, ref} from "@firebase/database";
import StartFirebase from "./firebaseConfig/firebase-config";
import {ContactForm} from "../data/contactform";

const _db = StartFirebase();

export class firebaseService {
    static writeContactFormDataToFirebase(contactform: ContactForm) {
        push(ref(_db,
            ("/contact-requests/"
        )), {
          contactform
        })
            .then(() => {
                alert('data stored succesfully' + contactform.name + contactform.email + contactform.message + contactform.subject + contactform);
            }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }

    // static async readReisDataAll() {
    //     console.log('readReisDataAll reached ')
    //
    //     const _db_ref = ref(_db);
    //
    //     get(child(_db_ref, 'reizen/ryan/')).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             if (snapshot.hasChildren()) {
    //                 console.log('data retrieved succesfully');
    //                 console.log(snapshot.val())
    //                 console.log(snapshot.val()[0])
    //                 console.log(snapshot.val()["1,674,799,022,126"])
    //                 const obj = snapshot.val();
    //
    //                 const organization = new Map<string, reisDTO>()
    //                 for (let prop in obj) {
    //                     console.log("prop:" + prop + " object: " + obj[prop]);
    //                     organization.set(prop, obj[prop])
    //                 }
    //                 console.log(obj)
    //                 sessionStorage.setItem('retrievedReizen', obj)
    //                 let arr = Array.from(obj);
    //                 console.log(arr)
    //                 return;
    //             }
    //         }
    //     }).catch((error) => {
    //         alert('datastore unsuccesfull, error: ' + error)
    //     })
    // }
    static readAllContactFormDataToFirebase() {
        console.log('readContactFormDataToFirebase reached');
        get(ref(_db,
            "/contact-requests/")).then((snapshot) => {    //TODO fix username properly
            if (snapshot.exists()) {

                console.log('data retrieved succesfully');
                let data = snapshot.val();
                console.log(snapshot.val())
                return data;
            }

            // let newData = data.stream.foreach((line: { constructor: reisDTO; }) => line.constructor)
        }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }

}

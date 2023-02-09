export class ContactformDTO {
  public _name: string;
  public _email: string;
  public _subject: string;
  public _message: string;
 constructor(name: string, email: string, subject: string, message: string) {
 this._name = name;
 this._email = email;
 this._subject = subject;
 this._message = message;
 }
  toString() {
    return this._name + ', ' + this._email + ', ' + this._subject + ', ' + this._message;
  }
}

// Firestore data converter
export const contactFormConvertor = {
  toFirestore: (contactform: ContactformDTO) => {
    return {
      to: 'ryan@reddy.world',
      name: contactform._name,
      from: 'ryan@reddy.world',
      replyTo: contactform._email,
      message: {text: contactform._message + '\n\nkind regards, ' + contactform._name,
        subject: contactform._subject}
    };
  },
  fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
    const data = snapshot.data(options);
    return new ContactformDTO(data.name, data.email, data.subject, data.message);
  }
};

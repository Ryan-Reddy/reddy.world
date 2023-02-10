export class ContactFormDTO {
  public _name: string;
  public _email: string;
  public _subject: string;
  public _message: string;
  public _date: number;
 constructor(name: string, email: string, subject: string, message: string, date: number) {
 this._name = name;
 this._email = email;
 this._subject = subject;
 this._message = message;
 this._date = date;
 }
}

// Firestore data converter
export const contactFormConvertor = {
  toFirestore: (contactform: ContactFormDTO) => {
    return {
      to: 'ryan@reddy.world',
      date: Date.now(),
      name: contactform._name,
      from: 'ryan@reddy.world',
      replyTo: contactform._email,
      message: {text: contactform._message + '\n\nkind regards, ' + contactform._name,
        subject: contactform._subject}
    };
  },
  fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
    const data = snapshot.data(options);
    return new ContactFormDTO(data.name, data.email, data.subject, data.message, data.date);
  }
};

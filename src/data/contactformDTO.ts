export class ContactformDTO {
  private _name: string;
  private _email: string;
  private _subject: string;
  private _message: string;
 constructor(name: string, email: string, subject: string, message: string) {
 this._name = name;
 this._email = email;
 this._subject = subject;
 this._message = message;
 }
  get name(): string {
    return this._name;
  }
  get email(): string {
    return this._email;
  }
  get subject(): string {
    return this._subject;
  }
  get message(): string {
    return this._message;
  }
}

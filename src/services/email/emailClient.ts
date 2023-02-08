
// import {Email} from "@mozeyinedu/email";
export function sendmail() {

  const Email = require('@mozeyinedu/email');

  const email = new Email({
    user: "reddyworldsending@gmail.com",
    pass: 'xwtgukcbzafdzelg',
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
  });

  email.send({
      from: "reddyworldsending@gmail.com",
      to: 'ryan@reddy.world',
      subject: 'test subject',
      html: `<h1>testing</h1>`,
    },

    (err, res)=>{
      if(err){
        console.log(err)
      }
      else{
        console.log(res)
      }
    });

}

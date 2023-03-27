import nodemailer from 'nodemailer'



const Gmail=process.env.Gmail
const Gmail_Pass=process.env.Gmail_Pass
//const port=process.env.Gmail_Port 


export const mailer=async(name:string,email:string,phone:string|undefined,subject:string,message:string)=>{

    
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        service:'Gmail',
        port: Number(process.env.Gmail_Port),
        secure: false, // true for 465, false for other ports
        auth: {
            user: Gmail, // generated ethereal user
            pass: Gmail_Pass, // generated ethereal password
        },
    });
    
    
    
    const info = await transporter.sendMail({
        from: email, // sender address
        to: 'hossemedine@outlook.com', // list of receivers
        subject: subject, // Subject line
        text: "Hello ", // plain text body
        html: `<div>
        <h1>Email Sender : ${email}</h1>
        
        <p>${message}</p>
        
       <p>${name}</p>
       <p>${phone}</p>
        </div>`
        
    }); 


    return(info)
}
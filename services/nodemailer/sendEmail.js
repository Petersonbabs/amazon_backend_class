const transporter = require("./transporter")
const dotEnv = require("dotenv")
dotEnv.config()

const sendEmail = (email, name) => {

    const options = {
        to: email,
        from: "Israel: gmail com",
        subject: "Your new product was added. 🎉🎉",
        sender: "Amazon",
        html: `
        <div style="display:flex; align-items:center; flex-direction:column; gap:1rem; padding: 1rem;">
            <h2 style="color: blue;">Hi, ${name}</h2>
            <p >Congratulations! Your new product was added.</p>
            <a href=${process.env.client_domain} style="border-radius:8px; padding:.5rem 1rem; background:blue; color:white;">Go to website</a>
        </div>`
    }
    
    transporter.sendMail(options)
}

module.exports = sendEmail
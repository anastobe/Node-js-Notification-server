
const express = require("express");
const app = express()
const admin = require("firebase-admin");
var serviceAccount = require("../social-auth-e6f0c-firebase-adminsdk-9jv0d-92954cb94f.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const token = "cUnD8MxMTzyHW7k3IZItES:APA91bG4Jm7pRSqhyZu29mcs0qSm-b83_qwnHbUGy4qly8vFbp9bMCyVHpfekDmjfFgEstw7bEMpLEu5TxubBZBOGt4Co8rKC0T8O7pEXP34S95NMV3HR3-_7upI-XP8lMW7DrejvdET"

admin.messaging().send({
    token: token,
    data: {
        customData: "Anas",
        id: '1',
        ad: "ahmed",
        subTitle: "Nodejs anas ahmed"
    },
    android: {
        notification:{
            body: "i am body",
            title: "i am title",
            color: "#f2aa4c",
            priority: "high",
            sound: "default",
            vibrateTimingsMillis: [200,500,800]
        }
    }
}).then((msg)=>{
    console.log("sdsdsd",msg);
})


// Start the server
const port = 3000;

app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`)
})

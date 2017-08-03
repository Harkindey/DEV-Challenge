var firebaseInternal = {
  fetch : () => {firebase.database().ref('/contacts/');
    dbRef.on('value', snapshot => {
      big.innerText = snapshot.val().name;
      console.log(snapshot.val());
    });
    },
    save : () => {
    firebase.database().ref(`/contacts/`)
    .push({
        name:"Laura",
        address: "CIPM avenue",
        phone_number : "04658758787",
        email_address : "khalid@yahoo.com",
        company : "Konga",
        jobDescription: "Java developer"
      })
       .then(() => console.log("success"))
       .catch(() => console.log("fail"));
     },

     edit : () => {
       firebase.database().ref(`/contacts/-${id}`)
        .set({
      "name": "Khalid",
      "address" : "CIPM avenue",
      "email_address": "khalid@yahoo.com",
      "phone_number" : " 04658758787",
      "company": "Konga",
      "jobDescription": " C++ developer"
    })
      .then(() => console.log("success"))
      .catch(() => console.log("failed"));
   },
   deleteContact : (id) => {
     firebase.database().ref(`/contacts/-${id}`)
       .remove()
       .then(() => () => console.log('success'))
       .catch(() => console.log('failed'));
     }
}

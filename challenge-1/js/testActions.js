var firebaseInternal = {
  fetch : () => {
    firebase.database().ref('/contacts/')
    .on('value', snapshot => {
    return snapshot.val();
  });
    },
    save : () => {
    firebase.database().ref(`/contacts/`)
    .push({
        name:"LAX",
        address: "CIPM avenue",
        phone_number : "04658758787",
        email_address : "khalid@yahoo.com",
        company : "Konga",
        jobDescription: "Java developer"
      })
       .then(() => console.log("success"))
       .catch(() => console.log("fail"));
     },

     edit : (id) => {
       firebase.database().ref(`/contacts/${id}`)
        .set({
      "name": "akinola",
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
     firebase.database().ref(`/contacts/${id}`)
       .remove()
       .then(() => () => console.log('success'))
       .catch(() => console.log('failed'));
     }
}

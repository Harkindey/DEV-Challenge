$('#save').on('click', function(event){
//event.default();
if( $('#name').val() != ''|| $('#email').val() != '' ) {
  firebase.database().ref(`/contacts/`)
  .push({
      name:$('#name').val(),
      phone_number : $('#phone').val(),
      email_address : $('#email').val(),
      company : $('#company').val(),
      jobDescription: $('#post').val()
    })
     .then(() => alert('Contact Was Added Successfully'))
     .catch(() => alert('An Error Occured'));
     contactForm.reset();
   } else {
     alert('Please fill atleast name or email!');
   }
});

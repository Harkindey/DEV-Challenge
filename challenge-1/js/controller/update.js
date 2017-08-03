

var id = getParameterByName('q');

var ContactInfo = firebase.database().ref(`/contacts/${id}`)
.on('value', snapshot => {
  contactinfo = snapshot.val()
    $('#name').val(contactinfo.name);
    $('#phone').val(contactinfo.phone_number);
    $('#email').val(contactinfo.email_address);
    $('#company').val(contactinfo.company);
    $('#post').val(contactinfo.jobDescription);
})


$('#save').on('click', function(){

  if ( id != ''){
    firebase.database().ref(`/contacts/${id}`)
     .set({
   name : $('#name').val(),
   email_address: $('#email').val(),
   phone_number : $('#phone').val(),
   company: $('#company').val(),
   jobDescription: $('#post').val()
 })
   .then(() => alert('Contact Was Edited Successfully'))
   .catch(() => alert('An Error Occured'));
  }
});

$('#close').on('click', function(){
  window.history.back()
})



// $("[id^='delete']").click(function(){
$('.btn.btn-danger.delete').click(function(){

  var action = confirm('Are You sure You want to Delete Contact');

    if (action == true ) {
      var id = getParameterByName('q');

      firebase.database().ref(`/contacts/${id}`)
        .remove()
        .then(() => () => console.log('success'))
        .catch(() => console.log('failed'));
      }
    })

$('#tabili').bind('DOMSubtreeModified', function(e) {
  if (e.target.innerHTML.length > 0) {
    $("[id^='delete']").click(function(){
      var id = getParameterByName('q');
      var action = confirm('Are You Sure You Want To Delete Contact');
        if (action == true ) {
          firebase.database().ref(`/contacts/${id}`)
            .remove()
            .then(() => () => console.log('success'))
            .catch(() => console.log('failed'));
        }
    });
  }
});

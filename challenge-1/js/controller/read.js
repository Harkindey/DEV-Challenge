var viewContact = firebase.database().ref('/contacts/')
.on('value', snapshot => {
//console.log("added", snapshot.val());
$('#tabili').append(contactHtmlFromObject(snapshot));

})


function contactHtmlFromObject(snapshot){
  var contact = snapshot.val()
  var length = Objectsize(contact);
  console.log(length);

  $('.count').text(length + ' Total');

  var html= '';
  for (x in contact){

  html += '<tr class="success">';
  html += '<th scope="row"><img class="img-circle" src="image/images.png" alt=""></th>';
  html += '<td>'+contact[x].name+'</td>';
  html += '<td>'+contact[x].email_address +'</td>';
  html += '<td>'+contact[x].company+'</td>';
  html += '<td>'+contact[x].phone_number+'</td>';
  html += '<td>'+contact[x].jobDescription +'</td>';
  html += '<td><a href="edit.html?q='+x+'"><button type="button" class="btn btn-default delete" id="edit">Edit</button></a> <a href="?q='+ x +'"><button type="button" class="btn btn-danger delete" id="delete'+x+'">Delete</button></td></a>';
  }

return(html)
}

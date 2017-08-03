(function(){
  var $content = $('#modalcontent').detach();   // Remove modal from page

  $('#add').on('click', function() {
    var $createbutton = $('<button type="button" class="btn btn-info">Add Contact</button>');
      $content.append($createbutton)
        modal.open({content: $content , width:500, height:400});
        console.log(modal);
    //$modal.append($createbutton);
  });

  $('#edit').on('click', function() {
    var $submitbutton = $('<button type="button" class="btn btn-info">Submit</button>');
    $content.append($submitbutton);
    modal.open({content: $content, width:500, height:400});
    //$modal.append($submitbutton);
  });

  $('#delete').on('click', function() {
    var deletebutton = $('<button type="button" class="btn btn-danger">Delete</button>');
    $content.append(deletebutton);
    modal.open({content: $content, width:500, height:400});
    //$modal.append($deletebutton);
  });
}());

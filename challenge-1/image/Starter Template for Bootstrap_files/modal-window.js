var modal = (function(){
  var $window = $(window);
  var $overlay = $('<div class="overlay"></div>');
  var $modal = $('<div class="modally"/>');
  var $content =$('<div />');
  var $close = $('<button type="button" class="btn btn-default" aria-label="Close">Close <span aria-hidden="true">&times;</span></button>');

  $modal.append($content,$close);

  $overlay.hide();

  $close.on('click', function(e){
    e.preventDefault();
    modal.close();
  });

  return {
    center: () => {
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({
        top:top + $window.scrollTop(),
        left:left + $window.scrollLeft()
      });
    },
    open : (settings) => {
      $content.empty().append(settings.content["0"]);
      console.log($content);
      $modal.css({
        width: settings.width || 'auto',
        height: settings.height || 'auto'
      })

      $(document).ready(function(){
					$('body').append($overlay, $modal);
				});

      modal.center();
      //console.log(modal.center())
      $(window).on('resize', modal.center);
    },
    close: () => {
      $content.empty();                            // Remove content from modal
      $modal.detach();                             // Remove modal from page
      $(window).off('resize', modal.center);
    }
  }
}());

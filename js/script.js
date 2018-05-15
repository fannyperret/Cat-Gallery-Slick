$(document).ready(function() {

  for( let i in db.images){
    if(db.images[i].type == "image"){
      $('#slider').append($('<div class="item"><img class="img-fluid" src="' + db.images[i].src + '" /></div>'));
    }
    else if(db.images[i].type == "text"){
      $('#slider').append($('<div class="item"><p>' + db.images[i].content + '</p></div>'));
    }
  }

  $('#slider').slick( {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  })

})

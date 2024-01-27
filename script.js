$(".panel").click(function(){
  removeActiveClasses();
  $(this).addClass("active");
  
})

function removeActiveClasses(){
  $(".panel").removeClass("active");

}
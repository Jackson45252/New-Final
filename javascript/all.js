/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }



$(window).ready(function () {
  $(window).scroll(function(evt){
    if ($(window).scrollTop()>0)
      $(".myNavbar").removeClass("navbar-top");
    else
      $(".myNavbar").addClass("navbar-top");
  });
});

$(document).on("click",'.fas',function(e){
  e.preventDefault();
  let target=$('.fas').attr('href');
  // console.log(alert(target));
  $('html,body').animate({
    scrollTop: $(target).offset().top - 107.9
  },500);
});

 


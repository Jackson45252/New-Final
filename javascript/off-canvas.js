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




  $(window).scroll(function(evt){
    if ($(window).scrollTop()>0)
      $(".myNavbar").removeClass("navbar-top");
    else
      $(".myNavbar").addClass("navbar-top");
  });
  
  var s= skrollr.init();
  
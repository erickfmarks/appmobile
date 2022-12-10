$(document).ready(function(){
    $('.nav_link').click(function(){
      $('.nav_link').removeClass("nav_link--active");
      $(this).addClass("nav_link--active");
    });
});


function menu(btn){
    document.getElementById("home").style.display = "none";
    document.getElementById("pubs").style.display = "none";
    document.getElementById("event").style.display = "none";
    document.getElementById("promo").style.display = "none";
    document.getElementById("patro").style.display = "none";
    document.getElementById(btn).style.display = "block";
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function makeResponsive() {
  var x = document.getElementById("nav_bar");
  if (x.className === "full-nav") {
    x.className = "responsive";
  } else {
    x.className = "full-nav";
  }
}
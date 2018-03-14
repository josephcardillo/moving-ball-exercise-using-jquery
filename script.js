var redball = $("#ball1");
var blueball = $("#ball2");

// animate red ball on click
  redball.click( function() {
    redball.animate (
      {
        position: "fixed",
        top: "10%",
        left: "10%"
      }, 1500)})

// animate blue ball on click
  blueball.click( function() {
    blueball.animate (
      {
        position: "fixed",
        top: "20%",
        right: "10%"
      }, 500)})

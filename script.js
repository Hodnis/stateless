"use strict";
//
// BUTTOn START
//
document.getElementById("btn-start").onclick = function () {
  startBtn();
};

function startBtn() {
  document.getElementById("btn-start").innerHTML = "Personlig Info";
  $("#personal-form").fadeIn();
}
//
// PERSONAL FORM //
//
$("#fname").keypress(function () {
  $("#fname-ghost, #fname-ghost-label").fadeIn();

  $("#fname").change(function () {
    $("#fname-ghost").val($("#fname").val());
  });
});

$("#lname").keypress(function () {
  $("#lname-ghost, #lname-ghost-label").fadeIn();

  $("#lname").change(function () {
    $("#lname-ghost").val($("#lname").val());
  });
});

$("#address").keypress(function () {
  $("#address-ghost, #address-ghost-label").fadeIn();

  $("#address").change(function () {
    $("#address-ghost").val($("#address").val());
  });
});

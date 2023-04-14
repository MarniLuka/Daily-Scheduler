$(function () {

  // Changes the save buttons into variables.
  var saveBtn9 = $("#saveBtn9");
  var saveBtn10 = $("#saveBtn10");
  var saveBtn11 = $("#saveBtn11");
  var saveBtn12 = $("#saveBtn12");
  var saveBtn1 = $("#saveBtn1");
  var saveBtn2 = $("#saveBtn2");
  var saveBtn3 = $("#saveBtn3");
  var saveBtn4 = $("#saveBtn4");
  var saveBtn5 = $("#saveBtn5");

  // Changes the boxes we're trying to target into variables.
  var time9 = $("#9AM .description");
  var time10 = $("#10AM .description");
  var time11 = $("#11AM .description");
  var time12 = $("#12PM .description");
  var time1 = $("#1PM .description");
  var time2 = $("#2PM .description");
  var time3 = $("#3PM .description");
  var time4 = $("#4PM .description");
  var time5 = $("#5PM .description");

  // When you click the button corresponding to the each box, it'll save the input into localStorage.
  saveBtn9.on('click', function () {
    localStorage.setItem("text9", time9.val());
  });
  saveBtn10.on('click', function () {
    localStorage.setItem("text10", time10.val());
  });
  saveBtn11.on('click', function () {
    localStorage.setItem("text11", time11.val());
  });
  saveBtn12.on('click', function () {
    localStorage.setItem("text12", time12.val());
  });
  saveBtn1.on('click', function () {
    localStorage.setItem("text1", time1.val());
  });
  saveBtn2.on('click', function () {
    localStorage.setItem("text2", time2.val());
  });
  saveBtn3.on('click', function () {
    localStorage.setItem("text3", time3.val());
  });
  saveBtn4.on('click', function () {
    localStorage.setItem("text4", time4.val());
  });
  saveBtn5.on('click', function () {
    localStorage.setItem("text5", time5.val());
  });

  // Retrieves the value saved in localStorage and will add it to the corresponding text box.
  $("#input9").text(localStorage.getItem("text9"));
  $("#input10").text(localStorage.getItem("text10"));
  $("#input11").text(localStorage.getItem("text11"));
  $("#input12").text(localStorage.getItem("text12"));
  $("#input1").text(localStorage.getItem("text1"));
  $("#input2").text(localStorage.getItem("text2"));
  $("#input3").text(localStorage.getItem("text3"));
  $("#input4").text(localStorage.getItem("text4"));
  $("#input5").text(localStorage.getItem("text5"));
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  // Displays the current date in the header of the page.
  var todayDate = dayjs();
  $('#currentDay').text(todayDate.format('MMMM D, YYYY'));
});

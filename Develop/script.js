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
    localStorage.setItem("text9", time9.value());
  });
  saveBtn10.on('click', function () {
    localStorage.setItem("text10", time10.value());
  });
  saveBtn11.on('click', function () {
    localStorage.setItem("text11", time11.value());
  });
  saveBtn12.on('click', function () {
    localStorage.setItem("text12", time12.value());
  });
  saveBtn1.on('click', function () {
    localStorage.setItem("text1", time1.value());
  });
  saveBtn2.on('click', function () {
    localStorage.setItem("text2", time2.value());
  });
  saveBtn3.on('click', function () {
    localStorage.setItem("text3", time3.value());
  });
  saveBtn4.on('click', function () {
    localStorage.setItem("text4", time4.value());
  });
  saveBtn5.on('click', function () {
    localStorage.setItem("text5", time5.value());
  });

  // Retrieves the valueue saved in localStorage and will add it to the corresponding text box.
  $("#input9").text(localStorage.getItem("text9"));
  $("#input10").text(localStorage.getItem("text10"));
  $("#input11").text(localStorage.getItem("text11"));
  $("#input12").text(localStorage.getItem("text12"));
  $("#input1").text(localStorage.getItem("text1"));
  $("#input2").text(localStorage.getItem("text2"));
  $("#input3").text(localStorage.getItem("text3"));
  $("#input4").text(localStorage.getItem("text4"));
  $("#input5").text(localStorage.getItem("text5"));
  
  // Current time in military hours
  var now = dayjs().format("H");
  console.log(now);

  // if statements to add or remove colors based on the current time.
  if (now == 9) {
    $("#1").removeClass("past future").addClass('present')
  } else if (now > 9) {
    $("#1").removeClass("present future").addClass('past')
  } else if (now < 9) {
    $("#1").removeClass("past present").addClass('future')
  };

  if (now == 10) {
    $("#2").removeClass("past future").addClass('present')
  } else if (now > 10) {
    $("#2").removeClass("present future").addClass('past')
  } else if (now < 10) {
    $("#2").removeClass("past present").addClass('future')
  };

  if (now == 11) {
    $("#3").removeClass("past future").addClass('present')
  } else if (now > 11) {
    $("#3").removeClass("present future").addClass('past')
  } else if (now < 11) {
    $("#3").removeClass("past present").addClass('future')
  };

  if (now == 12) {
    $("#4").removeClass("past future").addClass('present')
  } else if (now > 12) {
    $("#4").removeClass("present future").addClass('past')
  } else if (now < 12) {
    $("#4").removeClass("past present").addClass('future')
  };

  if (now == 13) {
    $("#5").removeClass("past future").addClass('present')
  } else if (now > 13) {
    $("#5").removeClass("present future").addClass('past')
  } else if (now < 13) {
    $("#5").removeClass("past present").addClass('future')
  };

  if (now == 14) {
    $("#6").removeClass("past future").addClass('present')
  } else if (now > 14) {
    $("#6").removeClass("present future").addClass('past')
  } else if (now < 14) {
    $("#6").removeClass("past present").addClass('future')
  };

  if (now == 15) {
    $("#7").removeClass("past future").addClass('present')
  } else if (now > 15) {
    $("#7").removeClass("present future").addClass('past')
  } else if (now < 15) {
    $("#7").removeClass("past present").addClass('future')
  };

  if (now == 16) {
    $("#8").removeClass("past future").addClass('present')
  } else if (now > 16) {
    $("#8").removeClass("present future").addClass('past')
  } else if (now < 16) {
    $("#8").removeClass("past present").addClass('future')
  };

  if (now == 17) {
    $("#9").removeClass("past future").addClass('present')
  } else if (now > 17) {
    $("#9").removeClass("present future").addClass('past')
  } else if (now < 17) {
    $("#9").removeClass("past present").addClass('future')
  };

  // Displays the current date in the header of the page.
  var todayDate = dayjs();
  $('#currentDay').text(todayDate.format('MMMM D, YYYY'));
});
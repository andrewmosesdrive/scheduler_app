$(document).ready(() => {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  let currentTime = moment().hour();

  if (currentTime === $(".time-9").)

  // link time to each hour block
  // set if statements to show color code
  let saveUserInput = "";

  // function that takes input and saves to localStorage

  $(".calendar-text").each(function () {
    // console.log($(this))
    let eleId = $(this).attr("id");
    // console.log(eleId)
    let localVal = localStorage.getItem(eleId);
    // console.log(localVal)
    if (localVal !== null) {
      $(this).val(localVal);
    }
  });
  // jquery onclick for each button

  $(".saveBtn").on("click", function () {
    // console.log("click")
    // Capture text-area input content
    saveUserInput = $(this)
      .parent()
      .siblings(".calendar-event")
      .children(".calendar-text")
      .val();

    // console.log(saveEvent)
    let eleId = $(this)
      .parent()
      .siblings(".calendar-event")
      .children(".calendar-text")
      .attr("id");
    // console.log(eleId)
    localStorage.setItem(eleId, saveUserInput);
  });
  // function that refreshes page
  $(".saveBtn").on("click", () => {
    location.reload();
  });
  // momentum
  // function that changes color code based on time (past/present/future)
});

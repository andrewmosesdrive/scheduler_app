$(document).ready(() => {
  // console.log("document loaded");

  // declare variable with empty string
  let saveUserInput = "";

  // set text of element to show time using moment
  $("#currentDay").text(moment().format("dddd, h:mm a"));

  // declare current time variable and use for moment reference
  let currentTime = moment().hour();
  //   console.log(currentTime);

  // function that takes input and saves to localStorage, then adapts color-coding
  $(".calendar-text").each(() => {
    // console.log($(this))
    let eleId = $(this).attr("id");
    // console.log(eleId)
    let localVal = localStorage.getItem(eleId);
    // console.log(localVal)
    if (localVal !== null) {
      $(this).val(localVal);
    }

    // reassign currentTime to focus on hour
    currentTime = moment().hour();
    // console.log(currentTime)

    // create variable to pull specific hour for each block
    let timeBlock = $(this).attr("data-hour");

    // if/else if statements for color coding
    if (timeBlock > currentTime) {
      $(this).addClass("future");
    } else if (timeBlock < currentTime) {
      $(this).addClass("past");
    } else if (timeBlock == currentTime) {
      $(this).addClass("present");
    }
  });

  // jquery onclick for each button
  $(".saveBtn").on("click", () => {
    // console.log("click")

    // Capture text-area input content
    saveUserInput = $(this)
      .parent()
      .siblings(".calendar-event")
      .children(".calendar-text")
      .val();

    let eleId = $(this)
      .parent()
      .siblings(".calendar-event")
      .children(".calendar-text")
      .attr("id");
    // console.log(eleId)

    // set item with local storage when save button is clicked
    localStorage.setItem(eleId, saveUserInput);
  });
  // function that refreshes page on click
  $(".saveBtn").on("click", () => {
    location.reload();
  });
  // function that clears data and refreshes page
  $(".clearBtn").on("click", () => {
    localStorage.clear();
    location.reload();
  });
});

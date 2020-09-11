$(document).ready(() => {
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
      debugger;
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
  // momentum
  // function that changes color code based on time (past/present/future)
});

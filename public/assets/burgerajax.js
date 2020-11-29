// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $(".change-sleep").on("click", function(event) {
//       var id = $(this).data("id");
//       var newSleep = $(this).data("newsleep");
  
//       var newSleepState = {
//         sleepy: newSleep
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/cats/" + id, {
//         type: "PUT",
//         data: newSleepState
//       }).then(
//         function() {
//           console.log("changed sleep to", newSleep);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
// //     });
// $(function() {
//     $(".submitBtn").click (function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newBurger = {
//         burger_name: $("#burgerEntry").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//     });
    

    // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".submitBtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerEntry").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
  $(function() {
    $(".btn").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdev");
  
      var newDevState = {
        devoured: newDevour,
      };
  
      // Send the PUT request.
      $.ajax("/", {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          console.log("changed to ID# ", newDevour);
          console.log(id)
          // Reload the page to get the updated list
          location.reload();
        }
        );
    });
  });
  
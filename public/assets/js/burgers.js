$(function(){
    $(".changeStatus").on("click", function(event){
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");
        let newDevourState = {
            devoured: newDevour
        };
        $.ajax("/api/burger/" + id , {
            type: "PUT",
            data: newDevourState
        }).then(function(){
            console.log("Changed devoured to", newDevour);
            location.reload();
        })
    });
    $(".burgerForm").on("submit", function(event){
        event.preventDefault();

        let newBurger  = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        }
        $.ajax("/api/burger", {
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
    $(".deleteBurger").on("click", function(event){
        let id = $(this).data("id");
        $.ajax("/api/burger/" + id, {
            type: "DELETE"
          }).then( () => {
              console.log("deleted cat", id);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });
});
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
});
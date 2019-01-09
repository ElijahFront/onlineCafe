(function () {
    $(".order__delete_btn").click(function (e) {
        e.preventDefault();

        let url = "/delete_order/" + $(this).data("order_id");
        console.log(url);
        $.ajax({
            type:"POST",
            url:url
        })
    })
})();
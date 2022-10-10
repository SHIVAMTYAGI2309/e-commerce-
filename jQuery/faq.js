
// div animation as slide up and down using jQuery
$(document).ready(function () {

    $(".active").parent(".card-box").siblings(".card-box").children(".card-A").slideUp();

    $(".card-Q").click(function () {
        $(".card-Q").removeClass("active")
        $(this).addClass("active");
        $(".active").siblings(".card-A").slideDown();
        $(".active").parent(".card-box").siblings(".card-box").children(".card-A").slideUp();
    })

})
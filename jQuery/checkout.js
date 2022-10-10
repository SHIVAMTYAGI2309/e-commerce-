// div animation for change button slide up and slide down using jQuery
$(document).ready(function () {
    $(".active").parent(".panel-box").siblings(".panel-box").children(".panel-body").slideUp("fast");

    $(".flip").click(function () {
        $(".panel-head").removeClass("active")
        $(this).parent(".p-0").parent(".panel-head").addClass("active")
        $(".active").siblings(".panel-body").slideDown("slow")
        $(".active").parent(".panel-box").siblings(".panel-box").children(".panel-body").slideUp("slow")
    })
})
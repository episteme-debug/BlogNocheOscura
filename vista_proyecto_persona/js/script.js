$(document).ready(function name(params) {
    $("sign-in").show();
    $("#sign-in").click(function name(params) {
        $(".register").hide();
        $(".hide").css({
            "display": "flex",
            "transform": "translateY(0)",
            "transition": "opacity 0.5s ease, transform 0.5s ease"

        });
    })

    $("#sign-up").click(function name(params) {
        $(".hide").css({
            "display": "none",
            "transform": "translateY(0)",
            "transition": "opacity 0.5s ease, transform 0.5s ease"

        });
        $(".register").show();
    })
})
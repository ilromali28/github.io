$(window).ready(function() {
    $(".message__cross").click(function() {
        $(this).parent().remove();
    });

    $.getJSON("https://api.2ip.ua/provider.json", function(e) {
        $("#myIp").html(e.ip);
        $("#myISP").html(e.name_ripe);
    });
});
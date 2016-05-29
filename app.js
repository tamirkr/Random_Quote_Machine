/**
 * Created by Tamir on 28/05/2016.
 */
function getQuote() {
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6',
        '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var quote,author = "";
    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
        headers:{
            "X-Mashape-Key":"g085Y2FtzXmshhv0iHCPdtoufOztp1aM6Jnjsn5R7G7xb9Lx8L",
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        },
        dataType: "json",
        success: function (data) {
            quote = data.quote;
            author = data.author;

            $(".quote").html("<i class='fa fa-quote-left'></i> " + quote);
            $(".author").html("- " + author);

            var random_color = Math.floor(Math.random() * colors.length);
            $("body").animate({
                opacity: 0,
            },500, function () {
                $(this).animate({
                    opacity: 1
                }, 500).css("background-color", colors[random_color]);
            });

            $(".quote").animate({
                opacity: 0,
            },500, function () {
                $(this).animate({
                    opacity: 1
                }, 500).css("color", colors[random_color]);
            });
            $(".author").animate({
                opacity: 0,
            },500, function () {
                $(this).animate({
                    opacity: 1
                }, 500).css("color", colors[random_color]);
            })

            $(".btn").animate({
                opacity: 0,
            },500, function () {
                $(this).animate({
                    opacity: 1
                }, 500).css("color", colors[random_color]);
            });
            
            
        }

    })
}

$(document).ready(function () {
        getQuote();
        $("#newQuote").on("click", getQuote);

});
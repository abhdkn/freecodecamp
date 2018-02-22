function getWikiList() {
    var url = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + q.value + "&namespace=0&format=json";

    $.getJSON(url, function (response) {
        console.log("json:", response);
        $(".wikiList").empty();
        for (var i = 0; i < response[1].length; i++) {
          
            $(".wikiList").append("<div class='card'><p><a target='_blank' href=" + response[3][i] + ">" + response[1][i] + "</a></p><p class='description'>" + response[2][i]+ "</></p></div>");
        }
    });

};

function randomWikiList() {
    var url = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=10";


    $.getJSON(url, function (response) {
        console.log("json:", response);
        $(".wikiList").empty();
        for (var i = 0; i < 10; i++) {
          //alert(response.query.random[0].id);
            $(".wikiList").append("<div class='card'><p><a target='_blank' href=http://en.wikipedia.org/?curid=" + response.query.random[i].id + ">" + response.query.random[i].title + "</a></p><p class='description'></></p></div>");
        }
    });

};

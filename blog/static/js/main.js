const characters = [

    "https://cors-anywhere.herokuapp.com/https://www.anapioficeandfire.com/api/characters/148",
    "https://cors-anywhere.herokuapp.com/https://www.anapioficeandfire.com/api/characters/823",
    "https://cors-anywhere.herokuapp.com/https://www.anapioficeandfire.com/api/characters/1052",
    "https://cors-anywhere.herokuapp.com/https://www.anapioficeandfire.com/api/characters/1303",
    "https://cors-anywhere.herokuapp.com/https://www.anapioficeandfire.com/api/characters/208",
    "https://cors-anywhere.herokuapp.com/https://www.anapioficeandfire.com/api/characters/583",
    "https://cors-anywhere.herokuapp.com/https://www.anapioficeandfire.com/api/characters/957",

];



function aj() {

    clickButton(e);

    $.ajax({
        method: 'GET',
        url: characters[i],
        type: 'jsonp',
        crossDomain: true,
        cors: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        success: function() {
            console.log("success");
        },
        error: function() {
            console.log("error");
        }

    });
}

$(".btn").on('click touch', clickButton);

function clickButton(e) {


    e.preventDefault();


    var i = $(this).attr("data-id");
    console.log(characters[i]);

    var data;

    $.getJSON(characters[i], function(json) {
        data = json;

        $('#name').html(json.name);

        const alliance = $('#alliance');

        Promise.all(data.allegiances.map(function(ally) {
                return new Promise(function(resolve, reject) {
                    $.getJSON(ally, function(json) {
                        resolve(json.name);
                    });
                });
            }))
            .then(function(allies) {
                alliance.html(allies.join(', '));
            });


        $('#born').html(json.born);

        const death = (json.died === "") ? 'N/A' : json.died;

        const dead = $('#death');

        dead.html(death);

        const cultureText = (json.culture === "") ? 'N/A' : json.culture;

        const culture = $('#culture');

        culture.html(cultureText);

        const title = $('#title');

        if (data.titles.length === "") {
            return 'N/A';
        } else {
            for (i = 0; i < data.titles.length; i++) {

                title.html(json.titles.join(', '));

            }
        }

        const alias = $('#alias');

        if (data.aliases.length === "") {
            return 'N/A';
        } else {
            for (i = 0; i < data.aliases.length; i++) {

                alias.html(json.aliases.join(', '));

            }
        }

        const spouse = $('#spouse');

        if (data.spouse === "") {
            return spouse.html('N/A');
        } else {
            $.getJSON(data.spouse, function(love) {
                return spouse.html(love.name);
            });
        }

        const tv = $('#seasons');

        for (var i = 0; i < data.tvSeries.length; i++) {
            tv.html(json.tvSeries.join(', '));
        }

        const actor = $('#actor')
        for (var i = 0; i < data.playedBy.length; i++) {
            actor.html(json.playedBy.join(', '));
        }

    });

};
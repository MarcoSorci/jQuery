// $(document).ready(() => console.log('ciao')); //when the document is ready, do function

// window.addEventListener('load', () => console.log('ciao'));  //original solution


// $(document).ready(() => {
//     $('#ciao').html('pluto'); //in the dollar use the same syntax as css (#id, .class)
//     console.log($('p'));
// });

// window.addEventListener('load', () => {
//     // document.getElementById('ciao').innerHTML = 'pippo'
//     console.log(document.querySelector('p'));

//     [...document.querySelectorAll('p')].forEach(p => p.innerHTML = 'paperino');


// });

$(document).ready(() => {

    $.getJSON("./assets/array.json", function (data) {
        $.each(data, function (key, val) {
            $("<p>", {
                "class": val, //properties of said element, plus html which is its content
                html: val
            }).appendTo(".container");

            $("p:contains(" + val + ")").on("mouseover", function () {
                $("p:contains(" + val + ")").css({ "background-color": "black", "color": "white" });
            });

            $("p:contains(" + val + ")").on("mouseout", function () {
                $("p:contains(" + val + ")").css({ "background-color": "white", "color": "black" });
            });

            $("p:contains(" + val + ")").on("click", function () {
                $("p:contains(" + val + ")").hide();
            });

        });
    });

});
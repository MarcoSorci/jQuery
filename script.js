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
    // $('p').on('click', function () {
    //     $('p').hide();
    // });
    $.getJSON("./assets/array.json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<p class='" + val + "'>" + val);
        });

        $("<div>", {
            html: items.join("")
        }).appendTo("body");
    });

    



});

window.addEventListener('load', () => {
    document.getElementById('ciao').className = 'ciao';
    document.getElementById('ciao').classList.add('ciao');
});


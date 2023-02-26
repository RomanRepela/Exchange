// let box ={
//     width: 1000,
//     height:600,
//     background: 'blue',
//     img:{
//         size:'cover',
//         margin: 25
//     }
// }

// console.log(box);

// console.log(JSON.stringify(box));

// console.log(JSON.parse(JSON.stringify(box)));

//--------------------------------------------------------------------

// 0 - Об'ект був створений але метод open ще не викликався
// 1 - Об'ект був створений   open викликаний 
// 2 - метод send викликаний
// 3 - Заванатаження 
// 4 - все виконано

//--------------------------------------------------------------------


//USD

let inputUahUsd = document.querySelector('.uah-usd');
let inputUsd = document.querySelector('.usd');


inputUsd.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputUahUsd.value = inputUsd.value * date.usd;
        }
    })
})

inputUahUsd.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputUsd.value = inputUahUsd.value / date.usd;
        }
    })
})


//EUR


let inputUahEur = document.querySelector('.uah-eur');
let inputEur = document.querySelector('.eur');



inputEur.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputUahEur.value = inputEur.value * date.eur;
        }
    })
})

inputUahEur.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputEur.value = inputUahEur.value / date.eur;
        }
    })
})



//CZK


let inputUahCzk = document.querySelector('.uah-czk');
let inputCzk = document.querySelector('.czk');



inputCzk.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputUahCzk.value = inputCzk.value * date.czk;
        }
    })
})
inputUahCzk.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputCzk.value = inputUahCzk.value / date.czk;
        }
    })
})

//PLN


let inputUahPln = document.querySelector('.uah-pln');
let inputPln = document.querySelector('.pln');



inputPln.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputUahPln.value = inputPln.value * date.pln;
        }
    })
})

inputUahPln.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputPln.value = inputUahPln.value / date.pln;
        }
    })
})

//GBP


let inputUahGbp = document.querySelector('.uah-gbp');
let inputGbp = document.querySelector('.gbp');



inputGbp.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputUahGbp.value = inputGbp.value * date.gbp;
        }
    })
})

inputUahGbp.addEventListener('input', function () {

    let req = new XMLHttpRequest();

    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'aplication/json; charset=utf-8')
    req.send()


    req.addEventListener('readystatechange', function () {

        if (req.readyState === 4 && req.status === 200) {
            console.log(req.response);
            let date = JSON.parse(req.response)
            inputGbp.value = inputUahGbp.value / date.gbp;
        }
    })
})
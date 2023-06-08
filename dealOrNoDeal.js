let count = 0;
let total = 0;//26
let casesCount = 26;
let numberOfRounds = 6;
let playerCaseCount = 0;

let prizes = [1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000, 2000000];

let smallPrizeList = document.querySelector('#smallPrizeList').children;

function fillInPrizesLeft(smallPrizeList, prizes) {
    for (let i = 0; i < smallPrizeList.length; i++) {
        total += Number(prizes[i]);
        smallPrizeList[i].innerHTML = '$' + prizes[i];
    }
}
fillInPrizesLeft(smallPrizeList, prizes);

let bigPrizeList = document.querySelector('#bigPrizeList').children;

function fillInPrizesRight(bigPrizeList, prizes) {
    for (let i = 0; i < bigPrizeList.length; i++) {
        total += Number(prizes[i + 13]);
        bigPrizeList[i].innerHTML = '$' + prizes[i + 13];
    }
}

fillInPrizesRight(bigPrizeList, prizes);

let cases = document.querySelector('#cases').children;
function randomizedPrizes(prizes) {
    for (let i = prizes.length - 1; i > 0; i--) {
        let randomized = Math.floor(Math.random() * (i + 1));
        let temp = prizes[i];
        prizes[i] = prizes[randomized];
        prizes[randomized] = temp;
    }
    return prizes;
}

function fillInCases(cases, prizes) {
    for (let i = 0; i < cases.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList = 'back'
        newDiv.style.display = 'none';
        newDiv.innerHTML = '$' + prizes[i];
        cases[i].append(newDiv);
    }
}

randomizedPrizes(prizes);
fillInCases(cases, prizes);

let openedCases = document.querySelector('.openedCases');
function openCaseValue(value,openCases) {
    openCases.innerHTML = value;
}
// let
// console.log(openedCases);
let checker = true;
let resultCount = 7;
let newCount = 6
function round(count,numberOfRounds){
    if(count === resultCount){
    checker = false;
    resultCount += newCount;
    newCount--;
    console.log(newCount);
    }
}
let noDeal = document.querySelector('#noDeal')
noDeal.addEventListener('click',function(){
    if(!checker){
        alert('You have to open a case');
        checker = true;
}
})
let deal = document.querySelector('#deal')
//{
//let count = 0;
// let total = 0;//26
// let casesCount = 26;
// let numberOfRounds = 6;
// let playerCaseCount = 0;
// round one open 6
// round two open 5
// round three open 4
// round four open 3
// round five open 2
// round six open 1
// round seven open 1
// round eight open 1
// round nine open 1/swap


function openCases(cases) {
    for (let i = 0; i < cases.length; i++) {
        cases[i].addEventListener('click', function () {
            round(count,numberOfRounds);
            if(checker){
                if (count === playerCaseCount) {
                    cases[i].children[0].style.display = 'none';
                    $(cases[i]).clone().appendTo(document.getElementById('playerCase'));
                    cases[i].style.opacity = "0";
                    count++
                    console.log(count)
                } else {
                    cases[i].children[0].style.display = 'block';
                    total -= cases[i].children[0].innerHTML.slice(1) / 1;
                    casesCount--;
                    openCaseValue(cases[i].children[0].innerHTML,openedCases)
                    console.log(cases[i].children[0].innerHTML);
                    removePrizeFromList(cases[i].children[0].innerHTML);
                    bankerOffer(total, casesCount);
                    count++;
                    console.log(count)

                    cases[i].style.opacity = "0";
                }
            }
        }, {once: true})
        }
    }


openCases(cases);

removePrizeFromList = function (prize) {
    for (let i = 0; i < smallPrizeList.length; i++) {
        if (smallPrizeList[i].innerHTML === prize) {
            smallPrizeList[i].style.display = 'none';
        }
    }
    for (let i = 0; i < bigPrizeList.length; i++) {
        if (bigPrizeList[i].innerHTML === prize) {
            bigPrizeList[i].innerHTML = '';
        }
    }
}
function bankerOffer(total, casesCount) {
    let offer = Math.floor(total / casesCount);
    document.querySelector('.bankerOffer').innerHTML = '$' + offer;
}

// function show(div){
// 	div.style.display = "block";
// }

// function hide(div){
// 	div.style.display = "none"
// }

// first click is players case
//round one start open 6 cases
//banker offers
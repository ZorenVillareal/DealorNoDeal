
let count = 0;
let total = 0;
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
        newDiv.classList = 'back';
        newDiv.style.display = 'none';
        newDiv.innerHTML = '$' + prizes[i];
        cases[i].append(newDiv);
    }
}

randomizedPrizes(prizes);
fillInCases(cases, prizes);

let openedCases = document.querySelector('.openedCases');
//cloned in openedCases
function openCaseValue(value, openCases) {
    openCases.innerHTML = value;
}
// round checker
let checker = true;
let resultCount = 7;
let newCount = 6;

function round(count, numberOfRounds) {
    if (count === resultCount) {
        resultCount += newCount;
        newCount--;
        checker = false;
        console.log(resultCount,newCount);
    }
}

// function round(count, numberOfRounds) {
//     if (count === resultCount) {
//       resultCount += newCount;
//       newCount--;
//       checker =false
//       if (newCount < 0) {
//         checker = true; // Reset the checker to true after a certain number of rounds
//       }
//       console.log(resultCount, newCount);
//     }
//   }
// noDeal button
let noDeal = document.querySelector('#noDeal');
noDeal.addEventListener('click', function () {
    if (!checker) {
        alert('You have to open a case');
        checker = true;
    }
});
//yesDeal
let deal = document.querySelector('#yesDeal');
deal.addEventListener('click', function () {
    if (!checker) {
        let final = Math.floor(total / casesCount)
        alert('You have to won $'+ final);
        checker = true;
    } else {
        // Handle the logic for the "DEAL" button
        // Calculate the final offer and perform the desired action
        let finalOffer = Math.floor(total / casesCount);
        // Your code here...
    }
});
//open cases
function openCases(cases) {
    for (let i = 0; i < cases.length; i++) {
        cases[i].addEventListener('click', function () {
            round(count, numberOfRounds);
            if (checker) {
                if (count === playerCaseCount) {
                    cases[i].children[0].style.display = 'none';
                    $(cases[i]).clone().appendTo(document.getElementById('playerCase'));
                    cases[i].style.opacity = '0';
                    count++;
                } else {
                    cases[i].children[0].style.display = 'block';
                    total -= cases[i].children[0].innerHTML.slice(1) / 1;
                    casesCount--;
                    openCaseValue(cases[i].children[0].innerHTML, openedCases);
                    removePrizeFromList(cases[i].children[0].innerHTML);
                    bankerOffer(total, casesCount);
                    count++;
                    cases[i].style.opacity = '0';
                    console.log(count)
                }
            }
        }, { once: true });
    }
}

openCases(cases);

function removePrizeFromList(prize) {
    for (let i = 0; i < smallPrizeList.length; i++) {
        if (smallPrizeList[i].innerHTML === prize) {
            smallPrizeList[i].style.display = 'none';
        }
    }
    for (let i = 0; i < bigPrizeList.length; i++) {
        if (bigPrizeList[i].innerHTML === prize) {
            bigPrizeList[i].style.display = 'none';
        }
    }
}

function bankerOffer(total, casesCount) {
    let offer = Math.floor(total / casesCount);
    document.querySelector('.bankerOffer').innerHTML = '$' + offer;
}

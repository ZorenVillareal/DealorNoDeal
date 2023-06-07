// let prizeCount = 0
// let casesCount = 26
// let numberOfRounds = 6

// // add all remaining unopened cases banker offer
// // loop over cases and open
// // if the price on board delete
// let prizes = [1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000,2000000]
// // console.log(prize.length)
// let total = 0

// // round one take 6 cases off
// // round two take 5 cases off
// // round three take 4 cases off
// // round four take 3 cases off
// // round five take 2 cases off
// // round six take 1 case off
// // round seven take 1 case off
// // round eight take 1 case off
// // round nine take 1 case off
// let smallPrizeList = document.querySelector('#smallPrizeList').children
//  console.log(smallPrizeList)
// function fillInPrizesLeft (smallPrizeList,prizes){
//     for (let i = 0; i < smallPrizeList.length; i++){
//             smallPrizeList[i].innerHTML = '$'+ prizes[i]
//             total += smallPrizeList[i].outerText.replace('$','')/1;
//             //used division to convert strings to numbers
//     }
// }
// //https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=(quantity))%3B-,How%20to%20convert%20a%20string%20to%20a%20number%20in%20JavaScript,will%20go%20before%20the%20operand.&text=We%20can%20also%20use%20the,into%20a%20floating%20point%20number.
// fillInPrizesLeft(smallPrizeList,prizes);

// let bigPrizeList = document.querySelector('#bigPrizeList').children
// function fillInPrizesRight(bigPrizeList,prizes){
//     for (let i = 0; i < bigPrizeList.length; i++){
//         bigPrizeList[i].innerHTML ='$'+ prizes[i+13]
//         total += bigPrizeList[i].outerText.replace('$','')/1;
//     }
// }
// fillInPrizesRight(bigPrizeList,prizes)
// console.log(Math.floor(total/26))
// let bool = false
// let cases = document.querySelector('#cases').children
// //let randomized =Math.random()
// function fillInCases(cases,prizes) {
//     for (let i = 0; i < cases.length; i++) {
//         cases[i].innerHTML = prizes[i]
//     }
// }
// function randomizedPrizes(prizes){
//     for (var i = prizes.length - 1; i > 0; i--) {
//         var randomized = Math.floor(Math.random() * (i + 1));
//         var temp = prizes[i];
//         prizes[i] = prizes[randomized];
//         prizes[randomized] = temp;
//     }
//     return prizes;
// }
// randomizedPrizes(prizes)
// fillInCases(cases,prizes)
// // var element = document.getElementById("#case")
// // function changeStyle(){
// // ;
// //     element.style.display = "none";
// // }
// // changeStyle(element)


let prizeCount = 0;
let casesCount = 26;
let numberOfRounds = 6;

let prizes = [1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000,2000000];
let total = 0;

let smallPrizeList = document.querySelector('#smallPrizeList').children;

function fillInPrizesLeft(smallPrizeList, prizes) {
  for (let i = 0; i < smallPrizeList.length; i++) {
      total += Number(prizes[i]);
    smallPrizeList[i].innerHTML = '$'+ prizes[i];
  }
}
fillInPrizesLeft(smallPrizeList, prizes);

let bigPrizeList = document.querySelector('#bigPrizeList').children;

function fillInPrizesRight(bigPrizeList, prizes) {
    for (let i = 0; i < bigPrizeList.length; i++) {
        total += Number(prizes[i + 13]);
        bigPrizeList[i].innerHTML = '$'+ prizes[i + 13];
    }
}

fillInPrizesRight(bigPrizeList, prizes);
// console.log(total);

let bool = false;
let cases = document.querySelector('#cases').children;
console.log(cases.length);

let newDiv = document.createElement('div');

function fillInCases(cases, prizes) {
    for (let i = 0; i < cases.length; i++) {
        cases[i].innerHTML = prizes[i];
        $(".col").append('<div>');
    }
}

function randomizedPrizes(prizes) {
  for (let i = prizes.length - 1; i > 0; i--) {
    let randomized = Math.floor(Math.random() * (i + 1));
    let temp = prizes[i];
    prizes[i] = prizes[randomized];
    prizes[randomized] = temp;
  }
  return prizes;
}

randomizedPrizes(prizes);
fillInCases(cases, prizes);
console.log(cases)
// function hidePrice(cases) {
//   cases.classList.add('hidden');
// }
// hidePrice(cases);
// const caseElements = document.querySelectorAll('#cases .col');
// console.log(caseElements);

// function hidePrice(caseElement) {
//   caseElement.classList.add('hidden');
// }

// caseElements.forEach((caseElement) => {
//     caseElement.addEventListener('click', () => {
//         hidePrice(caseElement);
//     });
// });

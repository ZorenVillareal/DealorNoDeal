let prizeCount = 0
let casesCount = 26
let numberOfRounds = 6
// let cases =  {A:price , B: price, C: price, D: price, E: price, F: price, G: price, H: price, I: price, J: price, K: price, L: price, M: price, N: price, O: price, P: price, Q: price, R: price, S: price, T: price, U: price, V: price, W: price, X: price, Y: price, Z: price}
// console.log(cases.length)

// add all remaining unopened cases banker offer
// loop over cases and open
// if the price on board delete
let prizes = [1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000,2000000]
// console.log(prize.length)
let cases = {}
// let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// function fillInCase (prizes,cases,letters){
//     // let randomized =;
//     for (let i = 0; i < prizes.length; i++){
//         cases[letters[i]] = prizes[i]
//     }
//     // console.log(cases)
//     return cases
// }
// fillInCase(prizes,cases,letters)

// round one take 6 cases off
// round two take 5 cases off
// round three take 4 cases off
// round four take 3 cases off
// round five take 2 cases off
// round six take 1 case off
// round seven take 1 case off
// round eight take 1 case off
// round nine take 1 case off

let smallPrizeList = document.querySelector('#smallPrizeList').children
// console.log(smallPrizeList)
function fillInPrizesLeft (smallPrizeList,prizes){
    for (let i = 0; i < smallPrizeList.length; i++){
            smallPrizeList[i].innerHTML = prizes[i]
    }
}
fillInPrizesLeft(smallPrizeList,prizes);
let bigPrizeList = document.querySelector('#bigPrizeList').children
function fillInPrizesRight(bigPrizeList,prizes){
    for (let i = 0; i < bigPrizeList.length; i++){
        bigPrizeList[i].innerHTML = prizes[i+13]
    }
}
fillInPrizesRight(bigPrizeList,prizes)
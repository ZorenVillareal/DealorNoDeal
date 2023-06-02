//array of prices
// array of cases

//set constants:
// let limit;
// let opened;
// let prizes = []
// let keepCaseValue;
// let otherCase;
let opened = []

let keepCaseValue =[];
let openedCaseValue =[];
let price = 0;
// let cases =  {A:price , B: price, C: price, D: price, E: price, F: price, G: price, H: price, I: price, J: price, K: price, L: price, M: price, N: price, O: price, P: price, Q: price, R: price, S: price, T: price, U: price, V: price, W: price, X: price, Y: price, Z: price}
// console.log(cases.length)
let div = []
console.log(div.length)
// add all remaining unopened cases banker offer
// loop over cases and open
// if the price on board delete
let prize = [0.01,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000,2000000]
console.log(prize.length)
//github copilot vscode hotkeys vscode
let cases = {}
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function fillInCase (prizes,cases,letters){

    for (let i = 0; i < prizes.length; i++){
        cases[letters[i]] = prizes[i]
    }
    console.log(cases)
    return cases


}
fillInCase(prize,cases,letters)
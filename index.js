const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return drivers.slice (0,2);
}


const returnLastTwoDrivers = function(){
    return drivers.slice (2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let fare;
function createFareMultiplier(multiplier){
    return function fareMultiplier (fare){
        return fare* multiplier;
    }
}


function fareDoubler(fare){
    return fare * 2
}


function fareTripler(fare){
    return fare * 3
}


function selectDifferentDrivers(selectingDrivers, createFareMultiplier){
    return createFareMultiplier (0);
    //return '[ ' + selectingDrivers.slice (0,2) + ' ]';
}
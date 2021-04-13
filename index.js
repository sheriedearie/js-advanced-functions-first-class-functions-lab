const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(sheep){
    return function thisIsAFunction(goat){
        return sheep * goat;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnSheep){
    return returnSheep(drivers);
}


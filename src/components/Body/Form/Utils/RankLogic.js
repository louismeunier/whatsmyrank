import { convertToS, convertToLegible } from "./timeHandlers";
//calculates rank and returns logical form of it
const ordinal_suffix_of = i => {
    //copied from https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

const getTimes = (rank, results) => {
    if (rank>7674000000) return [{rank:undefined,time:undefined},{rank:rank,time:"This many people don't live on earth idiot"},{rank:undefined,time:undefined}]
    if (rank>results.length+1) return [{rank:undefined,time:undefined},{rank:rank,time:"What are you thinking"},{rank:undefined,time:undefined}]
    rank = parseInt(rank)-1;
    var bests = results.map(time=>time.best/100);
    return [
        {rank: rank, time: convertToLegible(bests[rank-1])},
        {rank: rank+1, time: convertToLegible(bests[rank])},
        {rank: rank+2, time: convertToLegible(bests[rank+1])}
    ]
}

const getRanks = (time, results) => {
    time = convertToS(time);
    var bests = results.map(time=>time.best/100);
    bests.push(time);
    bests.sort((a, b) => a-b);
    var betterIndex = bests.indexOf(time)-1;
    var curIndex = bests.indexOf(time)+0;
    var worseIndex = bests.indexOf(time)+1;
    return  [
        {rank: betterIndex+1, time: convertToLegible(bests[betterIndex])},
        {rank: curIndex+1, time: convertToLegible(bests[curIndex])},
        {rank: (worseIndex+1>results.length?undefined:worseIndex+1), time: convertToLegible(bests[worseIndex])}
    ]
}
export { getTimes, getRanks };
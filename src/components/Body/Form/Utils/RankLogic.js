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
    rank = parseInt(rank)-1;
    if (rank>results.length) return [{rank:undefined,time:undefined},{rank:rank+1,time:"What are you thinking"},{rank:undefined,time:undefined}]
    var bests = results.map(time=>time.best/100);
    if (rank===-2 || rank==results.length-1) {    
        return [
            {rank:results.length-1,time:convertToLegible(bests[results.length-2]),person:results[results.length-2].personId},
            {rank:results.length,time:convertToLegible(bests[results.length-1]),person:results[results.length-1].personId}
        ]
    }
    return [
        {rank: rank, time: convertToLegible(bests[rank-1]),person:results[rank-1]?.personId},
        {rank: rank+1, time: convertToLegible(bests[rank]),person:results[rank].personId},
        {rank: rank+2, time: convertToLegible(bests[rank+1]),person:results[rank+1]?.personId}
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
        {rank: betterIndex+1, time: convertToLegible(bests[betterIndex]),person:results[betterIndex]?.personId},
        {rank: curIndex+1, time: convertToLegible(bests[curIndex]),person:"You"},
        {rank: (worseIndex+1>results.length?undefined:worseIndex+1), time: convertToLegible(bests[worseIndex]),person:results[worseIndex-1].personId}
    ]
}
export { getTimes, getRanks };
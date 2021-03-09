import { convertToS, convertToLegible } from "./timeHandlers";
import Continents from "../../../../consts/continents";
//!Need to account for no results in a country, ie you'd be first
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
const filterByLoc = (where, raw) => {
    //assume sorted
    if (where==="world") return raw
    else if (Continents.map(continent=>continent.id).indexOf(where) !== -1) return raw.filter(best=>best.continent==where)
    else return raw.filter(best=>best.country===where)
}

const getTimes = (rank, results, where) => {
    rank = parseInt(rank)-1;
    results.sort((a,b)=>a.best-b.best);
    var filtered = filterByLoc(where,results);
    if (filtered.length==0) return [{rank:rank,time:"none",person:"no one"}];
    const bests = filtered.map(time=>time.best/100);
    if (rank===-2 || rank+1 >=filtered.length) {    
        return [
            {rank:filtered.length-1,time:convertToLegible(bests[filtered.length-2]),person:filtered[filtered.length-2]?.personId},
            {rank:filtered.length,time:convertToLegible(bests[filtered.length-1]),person:filtered[filtered.length-1]?.personId}
        ]
    }
    return [
        {rank: rank, time: convertToLegible(bests[rank-1]),person:filtered[rank-1]?.personId},
        {rank: rank+1, time: convertToLegible(bests[rank]),person:filtered[rank].personId},
        {rank: rank+2, time: convertToLegible(bests[rank+1]),person:filtered[rank+1]?.personId}
    ]
}

const getRanks = (time, results, where) => {
    time = convertToS(time);
    results.sort((a,b)=>a.best-b.best);
    var filtered = filterByLoc(where,results);
    if (filtered.length==0) return [{rank:1,time:convertToLegible(time),person:"You"}];
    var bests = filtered.map(time=>time.best/100);
    bests.push(time);
    bests.sort((a, b) => a-b);
    var betterIndex = bests.indexOf(time)-1;
    var curIndex = bests.indexOf(time)+0;
    var worseIndex = bests.indexOf(time)+1;
    return  [
        {rank: betterIndex+1, time: convertToLegible(bests[betterIndex]),person:filtered[betterIndex]?.personId},
        {rank: curIndex+1, time: convertToLegible(bests[curIndex]),person:"You"},
        {rank: (worseIndex+1>results.length?undefined:worseIndex+1), time: convertToLegible(bests[worseIndex]),person:filtered[worseIndex-1]?.personId}
    ]
}
export { getTimes, getRanks };
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
const getRankData = (time, results) => {
    var bests = results.map(time=>time.best/100);
    bests.push(time);
    bests.sort((a, b) => a-b);
    var betterIndex = bests.indexOf(time)-1
    var curIndex = bests.indexOf(time)+0;
    var worseIndex = bests.indexOf(time)+1;
    return  [
        {rank: betterIndex+1, time: bests[betterIndex]},
        {rank: curIndex+1, time: bests[curIndex]},
        {rank: worseIndex+1, time: bests[worseIndex]}
    ]
}
export default getRankData;
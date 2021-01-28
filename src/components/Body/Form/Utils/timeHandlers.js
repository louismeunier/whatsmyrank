const isValidTime = val => {
    val = val.toString();
    return (val.match(/^([0-9]|[0-9][0-9]):[0-5][0-9]\.[0-9]([0-9])?$/gm) || val.match(/^(([0-5])?[0-9])?\.[0-9]([0-9])?$/gm));
}

const convertToS = minStr => {
    const sepOneIndex = minStr.indexOf(":");
    let final;
    if (sepOneIndex!=-1) {
        const min = parseInt(minStr.slice(0,sepOneIndex));
        const sec = parseInt(minStr.slice(sepOneIndex+1,sepOneIndex+3));
        const cs = parseFloat(minStr.slice(sepOneIndex+4, minStr.length).padEnd(2,"0"));
        final = (min * 60) + sec + (cs/100);
    }
    else {
        final = parseFloat(minStr);
    }   
    return final;
}

const convertToLegible = time => {
    if (time) {
        if (time<60) {
            return time;
        }
        else {
            const min = Math.floor(time/60);
            const sec = Math.floor(time-(60*min));
            const cs = Math.round(((time - (sec+(60*min)))*100));
            return `${min}:${sec.toString().padStart(2,"0")}.${cs.toString().padStart(2,"0")}`;
        }
    }
    else {return ""}
}

const formatDate = raw => {
    const dateObj = new Date(raw);
    return dateObj.toDateString();
}

export { isValidTime, convertToS, convertToLegible, formatDate };
function secToHour(time){
    const min = time/60;
    if(min<60){
        const minute = Math.trunc(min);
        const sec = time - (minute * 60);
        return times = minute + " min " + sec + " sec ago";
    }else if(min >= 60){
        const hour = Math.trunc(min/60);
        const mins = min - (hour * 60);
        const minute = Math.trunc(mins);
        const sec = (time -((minute * 60)+ (hour * 3600)));
        return times = hour + ' Hours ' + minute + ' minutes ' + sec + ' sec ago';
    }
}
const time = secToHour(3663434);
console.log(time);
const countOfWorkingDays = (start, end) => {
    const startObj = new Date(start);
    const endObj = new Date(end);
    let zero = 0;
    
    if (startObj > endObj)
        throw new Error('The first parameter is earlier date, than second!');
    else{

        while (startObj <= endObj) {
            const dayOfWeek = startObj.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) zero++;
            startObj.setDate(startObj.getDate() + 1);
        }
    }
    return zero;
}



export default countOfWorkingDays;

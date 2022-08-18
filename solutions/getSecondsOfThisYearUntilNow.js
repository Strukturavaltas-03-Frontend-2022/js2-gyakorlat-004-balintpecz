const getSecondsOfThisYearUntilNow = () => 
    (Math.round(Date.now() - new Date(`January 01, 2022`).getTime()) / 1000);

export default getSecondsOfThisYearUntilNow;
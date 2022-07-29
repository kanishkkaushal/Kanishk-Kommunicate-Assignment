// Run file for question 2 and 3 solution using
// node "Question 2 & 3.js" -- command

function getUrlParameterValue(url, parameter) {
    const newURL = new URL(url);
    const params = newURL.searchParams.get(parameter);
    console.log("Calling getUrlParameterValue(url, ", parameter, ") -> ", params);
}

const url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"

getUrlParameterValue(url, "utm_medium");
getUrlParameterValue(url, "utm_campaign");


function getReverse(num){
    let val = 0;
    while(num > 0){
        val = (val*10) + (num%10);
        num = Math.floor(num/10);
    }
    console.log(val);
}

const num = 941;
getReverse(num);
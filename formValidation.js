//Please , don't remove the following code 
if (typeof window !== 'undefined') {
    window.onload = function() {
        //update the code that handles the form submit
        document.querySelector("button").onclick = validate_all;
        let form = null;
        form.onsubmit =null;
    }
}
function validate_all(){
    let q_text = document.getElementById("q").innerHTML;
    let in_num = document.getElementById("num").innerHTML;
    let q_vale = validateQ(q_text);
    let num_vale = validateNum(in_num);
    if(q_vale != null && num_vale != null){
        alert(q_vale + num_vale);
    }
    else return;

}
//
//return a validation message in case the input is invalid
function validateQ(qValue) {
    let postfix = 'into the search box';
    let forbidenWords = "sex, porn, murder or violence"
    let maxWordLength = "nine letters"
    if (hasChar(qValue) && qValue.trim().length > 1) {
        if(isNumber(qValue))    
            return '*Please enter only text ' + postfix;
        else if (hasATooLongWord(qValue)) 
            return `*Please enter words not longer then ${maxWordLength} ${postfix}`;
        else if (hasForbidenWord(qValue)) 
            return `*Please enter words other then ${forbidenWords} ${postfix}`;
    }
    else{
        return `*Please enter at least 2 characters ${postfix}`;
    }
    return null;
}
//return a validation message in case the input is invalid
function validateNum(numValue) {
    let minResults = "1";
    let maxResults = "25";
    if (!isInRange(numValue))    
        return `*Please enter number (between) ${minResults} to ${maxResults} to tell google how many search results we want`;    
    else{
        return null;
    }
}
//
//*why is this text and not a num?
function isInRange(text){
    if(text === "" || text < 1 || text > 25){
        return true;
    }
    return false;
}
//
//*trying to put each word inside an array, and see if its a "bad word"
function hasForbidenWord(text) { 
    /*const text_array = text.split(" ");
    const word_array = text.split("");
    for(let x in text_array){
        low_x = x.toLowerCase();
        if(low_x == "sex" || low_x == "violnce" || low_x == "porn" || low_x == "murder"){
            return true;
        }
    
    }*/
    forbiden_array = ["sex","porn","violnce","murder"];
    for(let x in forbiden_array){
        if(text.indexOf(x) != -1){
            return true;
        }
    }
    return false;
}
// 
//*trying to put each word inside an array and seeing if any of the word is too long
function hasATooLongWord(text) {  
    const text_array = text.split(" ");
    for(let x in text_array){
        if(x.length > 9){
            return true
        }
    }
    return false;
}
//
//*try to see if the text is blank
function hasChar(text) {
    if(typeof text === String){
        return true
    }
    return false;
}
//
function isNumber(text) {
    if(typeof text === Number){
        return true;
    }

    return false;
}
//Please , don't remove the following code 
if (typeof module !== 'undefined') {
    module.exports = {
        isInRange,
        hasChar,
        isNumber,
        hasForbidenWord,
        hasATooLongWord,
    };
}

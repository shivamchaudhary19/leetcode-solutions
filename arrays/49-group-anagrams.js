
var groupAnagrams = function (strs) {
    let newArr = []
    let count = {}
    let result = []
    let temp = []
    let tempArr = [...strs]
    function normalize(obj) {

        const sorted = {};

        const keys = Object.keys(obj).sort();

        for (const key of keys) {
            sorted[key] = obj[key];
        }

        return JSON.stringify(sorted);
    }

    //====================

    for (const el of tempArr) {
        for (const char of el) {
            count[char] = (count[char] || 0) + 1
        } newArr.push(normalize(count));
        count = {};
    }

    for (let i = 0; i < newArr.length; i++) {
        temp.push(tempArr[i]);
        let j = i + 1 ;
        while(j < newArr.length){
            if (newArr[i] == newArr[j]){
                temp.push(tempArr[j])
                newArr.splice(j , 1);
                tempArr.splice(j , 1);
            } else{
                j++;
            }
        } result.push(temp); 
        temp = []
    } return result;
};

// Here's more optimal and shorter approach


var groupAnagrams = function(strs) {

    const map = new Map();

    for (const word of strs) {

        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return [...map.values()];
};
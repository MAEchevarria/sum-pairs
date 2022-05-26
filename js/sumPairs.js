exports.sumPairs = function(arr, sum) {
    let newArr = arr;
    let pairArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] + newArr[j] === sum) {
                pairArr.push([arr[i], newArr[j]])
                newArr.pop(newArr[j]);
            }
        }
    }
    if (pairArr.length === 0) {
        return "unable to find pairs";
    } else {
        return pairArr;
    }
};

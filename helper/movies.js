const isTimeAvailable = (allDate, selectedDate) => {
    const allRelatedDate = allDate.filter((date) => {
        return date.getDate() === Number(selectedDate.getDate());
    });
    const relatedTime = allRelatedDate.map((reDate) => {
        return reDate.getHours();
    })
    let isChecked = false;
    relatedTime.forEach((reTime) => {
        for (let i = reTime - 2; i <= reTime + 2; i++) {
            if (Number(i) === Number(selectedDate.getHours())) {
                isChecked = true;
                break;
            }
        }
    })
    // console.log('allRelatedDate', allRelatedDate, 'RE', relatedTime, selectedDate.getHours())
    return isChecked;
}

const removeDuplicates = (arrData) => {
    // console.log(arrData);
    const result = [];
    arrData.forEach((data) => {
        if(!result.includes(data.toString())){
            result.push(data.toString())
        }
    })
    console.log('result',result);
}

// removeDuplicatesUsingObj = (arrData) => {
//     const result = [];
//     for(let i = 1; i < arrData.length; i++){

//     }
// }

module.exports = { isTimeAvailable , removeDuplicates}

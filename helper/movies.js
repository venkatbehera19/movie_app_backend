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

module.exports = { isTimeAvailable }

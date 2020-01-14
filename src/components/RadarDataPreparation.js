function dataPreparation(data) {
    var allKeys = Object.keys(data)
    var measures = Object.keys(data[allKeys[0]])
    var newData = {}
    allKeys.forEach(key => {
        let array = []
        measures.forEach(measure => {
            array.push({
                measure: measure,
                [key]: data[key][measure]
            })
        });
        newData[key] = array
    });
    return newData
}

export default dataPreparation
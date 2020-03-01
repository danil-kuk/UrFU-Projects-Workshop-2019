function dataPreparation(data) {
    var allKeys = Object.keys(data)
    var newData = {}
    allKeys.forEach(key => {
        let array = []
        var measures = Object.keys(data[key])
        measures.forEach(measure => {
            array.push({
                measure: measure,
                [key]: data[key][measure]
            })
        })
        newData[key] = array
    })
    return newData
}

export default dataPreparation

const justifyTxt = (txt) => {
    
    if (typeof txt !== 'string' || txt.length <= 80) {
        return 'error'
    }

    txtArray = txt.split('')
    let result = []
    let newLine = []

    for (character = 0; character <= txtArray.length-1; character++) {
        
        newLine.push(txtArray[character])

        if (newLine.length == 80) {
            newLine.push('/n')
            result.push(newLine.join(''))
            newLine = []
        }
    }
    
    result.push(newLine.join(''))

    return result
}


module.exports = justifyTxt
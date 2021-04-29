function generateMapKey(method, url) {
    return `${method}__${url}`
} 

module.exports = {
    generateMapKey
}
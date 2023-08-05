function add(x, y) {
    return x + y
}

module.exports = {
    add,
}

const result = add(2, 3)
console.log(`result: ${result}`)
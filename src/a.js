function sum() {
    let total = null;
    for (let i = 0; i < arguments.length; i++) {
        let cur = Number(arguments[i]);
        if (!isNaN(cur)) {
            total += cur;
        }
    }
    return total;
}  

module.exports = {
    sum: sum
};
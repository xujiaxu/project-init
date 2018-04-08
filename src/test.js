function sum(num) {
    let total = null;
    for (let i = 0; i < num.length; i++) {
        let cur = Number(num[i]);
        if (!isNaN(cur)) {
            total += cur;
        }
    }
    return total;
}
const ary = [1, 2, 3, 4, 5];
console.log(sum(ary));
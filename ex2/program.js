var nums = process.argv.slice(2);
var sum = 0;
nums.forEach(function (v) {
    sum += Number(v);
})
console.log(sum);
const input = [1, 2, 3, 4, 5]

const result = input.map((num) => num * num)
// console.log(result);

const result2 = input.map((num) => Math.pow(num, 2))
// console.log(result2);


const inp = [1, -4, 12, 0, -3, 29, -150]

const res = inp
    .filter((num) => num < 0)
    .reduce((acc, num) => acc + num, 0)
    console.log(res);
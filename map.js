const myNum = [1, 2, 3, 4, 5]

const newNums = myNum
    .map((num) => num * 5)
    .map((num) => num - 2)
    .filter((num)=> num >=10)
console.log(newNums);

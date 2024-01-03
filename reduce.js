const myNum = [1, 2, 3, 4, 5]

const totalOfNums = myNum.reduce((acc, nums) => acc + nums, 0)
console.log(totalOfNums);

const shopingCart = [
    {
        coursename: 'js',
        price: 199
    },
    {
        coursename: 'py',
        price: 299
    },
    {
        coursename: 'java',
        price: 1099
    },
    {
        coursename: 'c++',
        price: 99
    },
]

const totalpay = shopingCart.reduce((acc, ele) => acc + ele.price, 0)

console.log('total couerse price is', totalpay);
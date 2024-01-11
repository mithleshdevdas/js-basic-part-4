
// const coding = ['js', 'py', 'java', 'python', 'cpp'];

 const values=coding.forEach((item) => {
     console.log(item);
     return item
 })
console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const NumLessThan=myNums.filter((nums)=> nums < 5)
// console.log(NumLessThan,`i am less than 5`);

const NumGretherThan = myNums.filter((nums) => (nums > 5))
// console.log(NumGretherThan,`i am grethar less than 5`);

const EualNums = myNums.filter((nums) => {
    return (nums >5 && nums <8)
})

// console.log(EualNums);

const books= [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
  
let userBook = books.filter((book) => book.edition >= 2010)
console.log(userBook);
userBook = books.filter((book) => book.genre === 'History')
 
let userBooks=books.filter((book) => {
    return book.edition >= 2000 && book.genre === "Non-Fiction";
})
console.log(userBooks);

// gfg
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const str = "mithlesh"
for (const sting of str) {
    // console.log(sting);
    
}
const myObj = {
    name: 'mith',
    age: 25
}
for (const obj of ([myObj])) {
    // console.log(obj);
    // console.log(Object.keys(obj));
    // console.log(Object.values(obj));
}

const map = new Map()
map.set('in','india')
map.set('ca','canada')
map.set('ln', 'london')
// console.log(map);

for (const [key,val] of map) {
    console.log(key,val);
    // console.log(item);
}
// 
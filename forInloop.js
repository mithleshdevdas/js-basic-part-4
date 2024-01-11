const myobj = {
    gaem1: 'wow',
    game2: 'cool',
    game3: 'amaz'
}

for (const key in myobj) {
   
       console.log(key ,myobj[key]); 
}
    
const coding = ['js', 'py', 'c++']
for (const key in coding) {
    console.log(coding[key]);
}

const maps = new Map();
// map.set("in", "india");
// map.set("ca", "canada");
// map.set("ln", "london");

for (const key in maps) {
    console.log(maps[key]);
}
// @ts-nocheck

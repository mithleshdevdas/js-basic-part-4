for (let i = 1;i <=10;i++) {

    // console.log(i);
}
for (let j = 1; j <=10;j++) {
    if (j == 5) {
        console.log("5 is Dedeted");
    
        break
    }
    console.log('value is j',j);
}
for (let a = 1; a <=10;a++) {
    if (a == 5) {
        console.log("5 is Dedeted");
    
        continue
    }
    console.log('value is a',a);
}

for (let b = 2; b <= 5; b++){
    console.log('outher loop', b);
    for (let c = 2; c <= 5; c++){
        console.log('inner loop', c);
        console.log(`${b} *${c} = ${b*c} `);
    }
}

const myarr = ['a', 'b', 'c']
for (let d = 0; d < myarr.length; d++){
    console.log(myarr[d]);
}
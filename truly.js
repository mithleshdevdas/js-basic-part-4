// falsy values

// false, 0, -0, "", null, undefined, nan

// truly value

// "0","false"," ", [], {}, function(){}

const user = []
if (user.length === 0) {
    console.log('user is empty arr');
} else {
    console.log('user is wow');
}

const emtyobj = {}
if (Object.keys( emtyobj).length===0 ) {
    console.log("obj is empty");
} else {
    console.log('obj');
}

// nuslish coalecing operator(??)

let val
val = 5 ?? 10
console.log(val);
val = null ?? 10
console.log(val);
val = undefined ?? 50
console.log(val);


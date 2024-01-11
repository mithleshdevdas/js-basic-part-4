// @ts-nocheck

const isUserLoggin = true

if (isUserLoggin) {
    console.log('yes');
} else {
    console.log('no');
}

const temp = 37
if (temp < 20) {
    console.log('temp se grether than');
} else {
    console.log('temp se less than');
}

const balance = 1000;
if (balance < 500) {
    console.log('less than 500');
} else if (balance < 750) {
    console.log('is less than 750');
} else if (balance < 1200) {
    console.log('is less than 1200');
} else {
    console.log('balance is zero');
}

const month = "feb"
switch (month) {
    case "jan":

       console.log("janvary"); 
        break;
    case "mar":

       console.log("feb"); 
        break;

    default:
        console.log("just chiil");
        break;
}

const userlogin = true
const debitcard = true
if (userlogin && debitcard) {
    console.log('allow to buy the course');
} else {
    console.log("plese login ");
}

const useremail = "mk@"
const usergoogle = false

if (useremail || usergoogle) {
    console.log("create account ");
} else {
    console.log("plese login email Or google");
}
// 
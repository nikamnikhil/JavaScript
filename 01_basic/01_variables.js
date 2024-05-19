const accountId=12345;
let accountEmail="nikhilnnikam1997@gamil.com";
var accountPassword="Admin@12345";
accountCity="Delhi";
let accountState;
// accountId=123; TypeError: Assignment to constant variable.
/*Prefer not to use var beacuse of issue in block scope or functional scope*/ 
console.log(accountId);

accountEmail="nnikam@fortune.com";
accountPassword="Admin@12";
accountCity="Mumbai";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
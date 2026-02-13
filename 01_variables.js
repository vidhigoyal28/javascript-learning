const accountId = 12345
let accountEmail ="vidhi@jjd.com"
var accountPassword = "12345"
accountCity ="Agra"
let accountState;
// accountId = 2 //not allowed as declared in constant
accountEmail = "vg@vg.com"
accountPassword = "22222255"
accountCity = "Delhi"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountCity , accountState])

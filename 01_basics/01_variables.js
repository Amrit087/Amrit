const accountId = 144553
let accountEmail = "amrit@google.com"
var accoutnPassword = "12345"
accountCity = "New Delhi"
let accountState;

// accountId = 2  // not allowed

console.log(accountId);

/*  (comment)
    Prefer not use var
    bcz of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accoutnPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accoutnPassword, accountCity, accountState])
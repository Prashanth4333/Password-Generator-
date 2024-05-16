function generate() {
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let b = "abcdefghijklmnopqrstuvwxyz";
    let c = "1234567890";
    let d = "@#₹_&-+*$=%€¥";
    let combined = a + b + c + d;
    let password = "";
    let length = 12;
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * combined.length);
        password += combined[random];
  } 
    return password;
}
console.log("         🔑 Password Generator 🔑\n")
console.log("New generated Password :-",generate());

function tagPassword(password) {

    if (typeof password !== "string") {
        return "INVALID";
    }

    var hasLetter = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {

        var ch = password[i];

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            hasLetter = true;
        }

        if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }

    if (password.length >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    }
    else if (password.length >= 8 && hasLetter && hasNumber) {
        return "MEDIUM";
    }
    else if (password.length < 8) {
        return "WEAK";
    }
    else {
        return "WEAK";
    }
}
console.log(tagPassword(12345));
console.log(tagPassword("abc123"));
console.log(tagPassword("abc123456"));
console.log(tagPassword("abcd12345678"));

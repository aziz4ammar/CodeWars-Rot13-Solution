function rot13(message) {
    let res = "";
    for (let i = 0; i < message.length; i++) {
        let ch = message.charAt(i);
        if (ch.match(/[a-z]/i)) {
            let code = message.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            ch = String.fromCharCode(((code - 65 + 13) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            ch = String.fromCharCode(((code - 97 + 13) % 26) + 97);
        }
        }
        res += ch;
    }
    return res;
}
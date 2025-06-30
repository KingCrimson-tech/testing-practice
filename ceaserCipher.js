function ceaserCipher(str, key) {
  const msg = String(str);
  var enc = "";

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      code = ((code - 65 + key) % 26) + 65;
    } else if (code >= 97 && code <= 122) {
      code = ((code - 97 + key) % 26) + 97;
    }

    enc += String.fromCharCode(code);
  }

  return enc;
}

console.log(ceaserCipher("HeLLo", 3));
module.exports = ceaserCipher;

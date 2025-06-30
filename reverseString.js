function reverseString(str){
    var splitStr = String(str).split('');

    var reverseArray = splitStr.reverse();

    return reverseArray.join('');
};

module.exports = reverseString;
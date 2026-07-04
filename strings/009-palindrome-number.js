
var isPalindrome = function(x) {
    let ch = String(x);
    let left = 0;
    let right = ch.length - 1;

    for (let i = 0; i < ch.length / 2; i++) {
        if (ch[left] != ch[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};
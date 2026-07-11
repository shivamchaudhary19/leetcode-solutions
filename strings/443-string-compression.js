
var compress = function(chars) {
    let write = 0;
    let i = 0;

    while (i < chars.length) {

        let current = chars[i];
        let count = 0;

        while (i < chars.length && chars[i] === current) {
            count++;
            i++;
        }

        chars[write] = current;
        write++;

        if (count > 1) {
            let digits = count.toString();

            for (let digit of digits) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
};
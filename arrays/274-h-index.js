var hIndex = function (citations) {

    let answer = 0;
    let n = citations.length;

    for (let h = 1; h <= n; h++) {

        let count = 0;

        for (let i = 0; i < n; i++) {

            if (citations[i] >= h) {
                count++;
            }

        }

        if (count >= h) {
            answer = h;
        }

    }

    return answer;
};
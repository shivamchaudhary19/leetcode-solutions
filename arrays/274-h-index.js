
var hIndex = function(citations) {

    let answer = 0;

    for (let i = 0; i < citations.length; i++) {

        let citation = citations[i];
        let count = 0;

        for (let j = 0; j < citations.length; j++) {

            if (citations[j] >= citation) {
                count++;
            }

        }

        if (count >= citation) {
            answer = Math.max(answer, citation);
        }

    }

    return answer;
};
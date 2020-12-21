function solution(participant, completion) {
    var answer = "";

    let firstPart = new Map();
    participant.forEach(person => {
        if (!firstPart.get(person)) firstPart.set(person, 1);
        else firstPart.set(person, firstPart.get(person) + 1);
    });

    completion.forEach(person => {
        if (firstPart.get(person)) {
            firstPart.set(person, firstPart.get(person) - 1);
        }
    });

    participant.forEach(person => {
        if (firstPart.get(person) && firstPart.get(person) >= 1) {
            answer = person;
        }
    });
    return answer;
}

solution(["leo", "kiki", "eden", "kiki"], ["eden", "kiki", "leo"]);

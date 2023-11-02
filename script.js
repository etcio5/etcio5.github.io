function startPrompts() {
    event.preventDefault();

    var numSubj = document.getElementById("numSubj").valueAsNumber;
    var sumMarks = 0;

    for (i = 0; i < numSubj; i++) {
        let subjectResult = parseInt(prompt("Insert the mark you got in subject " + (i + 1)));
        sumMarks += subjectResult;
        printOnPlaceholder("The grade for subject " + (i + 1) + " (" + subjectResult + ") is " + getGrade(subjectResult) + "</br>");
    }

    let overallGrade = sumMarks / numSubj;

    printOnPlaceholder("The average total grade ("+overallGrade+") is " + getGrade(overallGrade)+"</br>");

}

function getGrade(subjectResult) {
    switch (true) {
        case subjectResult >= 90:
            return "A";


        case subjectResult >= 80:
            return "B";


        case subjectResult >= 70:
            return "C";


        case subjectResult >= 60:
            return "D";


        default:
            return "F";
    }
}

function printOnPlaceholder(message) {
    document.getElementById("placeholderPrint").innerHTML += (message);
}
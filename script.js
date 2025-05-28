function checkIfEligible(age) {
    if (typeof age !== 'number') {
        console.log("მითითებული ასაკი არასწორია!");
    } else if (isNaN(age)) {
        console.log("მითითებული ასაკი არასწორია!");
    } else if (age < 18) {
        console.log("თქვენ არ შეგიძლიათ მართვის მოწმობის აღება");
    } else if (age >= 18) {
        console.log("თქვენ შეგიძლიათ მართვის მოწმობის აღება");
    }
}



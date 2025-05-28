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

checkIfEligible("17"); // "თქვენ არ შეგიძლიათ მართვის მოწმობის აღება"
checkIfEligible("abc"); // "მითითებული ასაკი არასწორია!"
checkIfEligible("25"); // "თქვენ შეგიძლიათ მართვის მოწმობის აღება"
checkIfEligible(25); // "თქვენ შეგიძლიათ მართვის მოწმობის აღება"

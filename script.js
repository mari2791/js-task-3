let age = 15; // შეგიძლიათ შეცვალოთ ეს მნიშვნელობა

if (typeof age !== "number" || isNaN(age)) {
    console.log("მითითებული ასაკი არასწორია!");
} else if (age < 18) {
    console.log("თქვენ არ შეგიძლიათ მართვის მოწმობის აღება");
} else {
    console.log("თქვენ შეგიძლიათ მართვის მოწმობის აღება");
}

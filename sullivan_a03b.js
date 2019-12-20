/*  Anna Sullivan
    sullivan_a03b.js
    INFO2124WW
    Thoendel
    12/20/19
*/

{
const firstName = "Anna";
const lastName = "Sullivan";
const villainFirstName = "John";
const villainLastName = "Williams";
const companyName = "Pear Inc.";
let annualSalary = 150000;
let laughString = "Heh\n";
let age = 25;
let weight = 95;
let counterStartValue = 6;

console.log(" ");
console.log(`Good evening, ${firstName}. I'm glad to see you could join us.`);
console.log(`According to your files, you're ${age} years old. Hehe, that means next`);
console.log(`year you'll be ${age + 1} years old and if I doubled your age, you'd be`);
console.log(`${age * 2} years old!`);
console.log(" ");
console.log(`I found your file because your last name, '${lastName.toUpperCase()}' was all`);
console.log(`capitalized on your folder. This is unusual because our files usually have`);
console.log(`last names all lowercase. So I expected to see '${lastName.toLowerCase()}', which`);
console.log(`I did not see.`);
console.log(" ");
console.log(`Allow me to introduce myself. My name is ${villainFirstName} ${villainLastName}.`);
console.log(" ");
console.log(`I'm the chief investigator at ${companyName}. I've been tasked with investigating you `);
console.log(`due to a suspected case of fraud. It appears you embezzled 10% of your annual salary. As you`);
console.log(`know, your annual salary is $${annualSalary} and 10% of your annual salary is $${annualSalary / 10},`);
console.log(`which is a sizeable amount for our company.`);
console.log(" ");
console.log(`I know your password. It was simple, it's just the first, third, and fourth letters of your first name:`);
console.log(`${firstName.charAt(0)} ${firstName.charAt(2)} ${firstName.charAt(3)}`);
console.log(" ");
console.log(`And the PIN code for your debit card was just the index value of the first, third, and fourth values of your last name:`);
console.log(`${lastName.indexOf("S")} ${lastName.indexOf("l")} ${lastName.indexOf("i")}`);
console.log(" ");
console.log(`Hmmm.... sometimes I ask my Google home, "Does my last name begin with 'V'", and Google responds "${lastName.startsWith("V")}"`);
console.log(`...and then I ask Google home, "Does my last name end with 'n'", and Google responds "${lastName.endsWith("n")}"`);
console.log(" ");
console.log(`And sometimes, I ask Google home if my weight is finite, and Google home responds "${Number.isFinite(weight)}", which makes me happy.`);
console.log(`...but when I ask if my first name is finite, Google home responds, "${isFinite(firstName)}", and this makes me sad.`);
console.log(" ");
console.log(`Anyway, I've talked to much. Now, it's time for action. Somebody set up us the bomb. All your base are belong to us.`);
console.log(" ");
console.log(`Allow me to laugh five times:`);
console.log(`${laughString.repeat(5)}`);
console.log(" ");
console.log(`**Background voice**`);
console.log(`Now counting down:`);
console.log(" ");
console.log(counterStartValue--);
console.log(counterStartValue--);
console.log(counterStartValue--);
console.log(counterStartValue--);
console.log(counterStartValue--);
console.log(counterStartValue--);
console.log(" ");
console.log(`Boom!`);
}

// declarations
const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const btnContainer = document.querySelector("#buttons");
const buttons = btnContainer.querySelectorAll("button");
const tipPerson = document.querySelector("#tipperson");
const tipTotal = document.querySelector("#tiptotal");
var tipAmount, peopleNum, percentage, billAmount;

//Events


buttons.forEach(button => {
    if(button.classList.contains("percentage")) {
        button.addEventListener('click', () => {
            event.preventDefault();
            button.classList.toggle('active');
            percentage = parseFloat(button.value);
            if(button.classList.contains("active")) {
                tipCalc(percentage);
            }
        });
    }
});

function tipCalc(percentage) {
    peopleNum = parseInt(people.value);
    billAmount = parseInt(bill.value);

    //Get Tip
    tipAmount = billAmount * percentage;
    tipPerson.innerHTML = "$"+tipAmount/peopleNum;

    //Get total
    

    console.log(tipAmount);
}
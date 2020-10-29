function calcLateFee() {
    //get num books
    var numBooks = parseInt(prompt("How many books?"));
    //get num DVDs
    var numDVDs = parseInt(prompt("How many DVDs?"));
    //get days late
    var daysLate = parseInt(prompt("How many days late?"));
    //calc amt due
    var amtDue = numBooks * daysLate + numDVDs * daysLate;
    //output
    alert("You owe: $"+amtDue.toFixed(2)+".");
}
function calcPizzaShare() {
    //get num toppings
    var numToppings = parseInt(prompt("How many toppings?"));
    //get num coworkers pitching in
    var numCoworkers = parseInt(prompt("How many CoWorkers pitching in?"));
    //calc share amount
    var shareAmt = (15.0 + 1.25 * numToppings) / numCoworkers;
    //output
    alert("Pizza cost is: $"+shareAmt.toFixed(2)+" per CoWorker.");

}
$(document).ready( function() {
	$("#libraryBtn").click(calcLateFee);
	$("#pizzaBtn").click(calcPizzaShare);
});
function calcLateFee() {
    //get num books
    var numBooks = parseInt($("#numBooks").val());
    //get num DVDs
    var numDVDs = parseInt($("#numDVDs").val());
    //get days late
    var daysLate = parseInt($("#daysLate").val());
    //calc amt due
    var amtDue = numBooks * daysLate + numDVDs * daysLate;
    //output
    //alert("You owe: $"+amtDue.toFixed(2)+".");
	$("#libraryOut").text("You owe: $"+amtDue.toFixed(2)+".");
}
function calcPizzaShare() {
    //get num toppings
    var numToppings = parseInt($("#numToppings").val());
    //get num coworkers pitching in
    var numCoworkers = parseInt($("#numCoworkers").val());
    //calc share amount
    var shareAmt = (15.0 + 1.25 * numToppings) / numCoworkers;
    //output
    //alert("Pizza cost is: $"+shareAmt.toFixed(2)+" per CoWorker.");
	$("#pizzaOut").text("Pizza cost is: $"+shareAmt.toFixed(2)+" per CoWorker.");
}
$(document).ready( function() {
	$("#libraryBtn").click(calcLateFee);
	$("#pizzaBtn").click(calcPizzaShare);
});
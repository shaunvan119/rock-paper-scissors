const handOptions = {
    "rock" : "images/Rock.png",
    "paper" :"images/Paper.png",
    "scissors" :"images/Scissors.png"
}

const pickUserHand = (hand) => {
    console.log(hand);
    //hide current before moving onto next page
    let hands = document.querySelector(".hands")
    hands.style.display = "none";
    //show the next page with the hand we pick and 

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user pick
    if( hand == "rock") {
    document.getElementById("userPickImage").src = "images/Rock.png"
 }

}
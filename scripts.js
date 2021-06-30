// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", event => {
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleHeight = 0;
    let takeOffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");


    takeOffButton.addEventListener("click", event => {
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (takeOffConfirmation) {
            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerText = shuttleHeight + 10000;
        }
    });

    landingButton.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
    });

});
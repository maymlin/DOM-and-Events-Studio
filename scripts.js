// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", event => {
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleHeight = 0;
    
    let takeOffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let missionAbortButton = document.getElementById("missionAbort");

    let rocket = document.getElementById("rocket");
    let upButton = document.getElementById("upButton");
    let downButton = document.getElementById("downButton");
    let rightButton = document.getElementById("rightButton");
    let leftButton = document.getElementById("leftButton");
    
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
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        shuttleHeight = 0;
        spaceShuttleHeight.innerText = shuttleHeight;
    });

    missionAbortButton.addEventListener("click", event => {
        let missionAbortConfirmation = window.confirm("Confirm that you want to abort the mission.");

        if (missionAbortConfirmation) {
            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.background = "green";
            shuttleHeight = 0;
            spaceShuttleHeight.innerText = shuttleHeight;
        }
    });

    upButton.addEventListener("click", event => {
        shuttleHeight += 10000;
        spaceShuttleHeight.innerText = shuttleHeight;        
    });

    downButton.addEventListener("click", event => {
        if (shuttleHeight > 0) {
            shuttleHeight -= 10000;
        }
        spaceShuttleHeight.innerText = shuttleHeight;
    });

    let rocketPosition = 0;

    rightButton.addEventListener("click", event => {
        shuttleBackground.style.background = "black";
        rocketPosition += 10;
        rocket.style.left = rocketPosition + "px";
    });

});
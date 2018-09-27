$(document).ready(function() {
    // show a rundem number

    var random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(random);
    $("#guessNumber").text(random);

    var redCrystal;
    var blueCrystal;
    var yellowCrystal;
    var greenCrystal;

    // random Numbers for Crystals
    function crystalRandomCreator() {
        redCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        blueCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        console.log(redCrystal, blueCrystal, yellowCrystal, greenCrystal)

        $("#redCrystal").attr("data", redCrystal);
        $("#blueCrystal").attr("data", blueCrystal);
        $("#greenCrystal").attr("data", greenCrystal);
        $("#yellowCrystal").attr("data", yellowCrystal);
    }

    // click on image
    var totalScore = 0;
    var wins = 0;
    var loses = 0;
    $("img").click(function() {
        totalScore = parseInt(totalScore + parseInt($(this).attr("data")));
        $("#totalscore").text(totalScore);
        if (totalScore === random) {
            wins++
            $("#wins").text(wins);
            totalScore = 0;
            random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            console.log("You win");
            $("#guessNumber").text(random);

            crystalRandomCreator();


        } else if (totalScore > random) {
            loses++
            $("#losses").text(loses);
            totalScore = 0;
            random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            console.log("You loose");
            $("#guessNumber").text(random);

            crystalRandomCreator();
        }
    })

    crystalRandomCreator();
})
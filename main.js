function Login() {
    player1_name = document.getElementById("player1").value;
    player2_name = document.getElementById("player2").value;

    localStorage.setItem("player1", player1_name);
    localStorage.setItem("player2", player2_name);
    if (player1_name == "" || player2_name == "") {
        window.alert("Please Enter Your Name To Play The Game");
    } else {
        window.location = "gamepage.html";
    }

}
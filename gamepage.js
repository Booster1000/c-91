player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + " : ";
document.getElementById("player2").innerHTML = player2_name + " :  ";

document.getElementById("player_1_score").innerHTML = " " + player1_score;
document.getElementById("player_2_score").innerHTML = " " + player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    CharAt1 = word.charAt(1);
    length_divide_2 = Math.floor(word.length / 2);

    CharAt2 = word.charAt(length_divide_2);

    length_minus_1 = word.length - 1;
    CharAt3 = word.charAt(length_minus_1);

    remove_CharAt1 = word.replace(CharAt1, "_");
    remove_CharAt2 = remove_CharAt1.replace(CharAt2, "_");
    remove_CharAt3 = remove_CharAt2.replace(CharAt3, "_");

    question_word = "<h1 id='word_display'> Q. " + remove_CharAt3 + "</h1>";
    answer_box = "<br> <input type='text' placeholder='Answer'id='A_Box'>";
    check_button = "<br> <br> <button class='btn btn-success' id='check_button' onclick='check()'> Check </button>";

    row = question_word + answer_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";


function check() {
    get_answer = document.getElementById("A_Box").value;
    answer = get_answer.toLowerCase();

    if (word == answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player_1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player_2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question_turn : " + player2_name;

    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question_turn : " + player1_name;


    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer_turn : " + player2_name;

    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer_turn : " + player1_name;
    }
    document.getElementById("output").innerHTML = "";

}
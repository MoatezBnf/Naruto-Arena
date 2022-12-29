function SignInControl(){
    if (document.getElementById("email").value=="" || document.getElementById("password").value==""){
        alert("All fields are mandatory.");
    }
}
function RegisterControl(){
    if (document.getElementById("registerName").value=="" || document.getElementById("registerUsername").value=="" || 
    document.getElementById("registerEmail").value=="" || document.getElementById("registerPassword").value=="" ||
    document.getElementById("registerRepeatPassword").value=="" ){
        alert("All fields are mandatory.");   
    }
}
function ResetPass(){
    if (document.getElementById("resetemail").value==""){
        alert("All fields are mandatory.")
    }
}
$('#loginmodal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})
$('#registermodal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})
$('#resetmodal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})
$(":radio").click(function(){
    var radioName = $(this).attr("name"); //Get radio name
    $(":radio[name='"+radioName+"']").attr("disabled", true); //Disable all with the same name
 });
 var i=0;
function question1(){
    let answer;
    if (document.getElementById("q1a2").checked==true){
        answer="Correct, Mizuki tricks Naruto into stealing the Scroll of Sealing, and that's how he learns his signature multi shadow clone jutsu. So, honestly, it all turned out just fine.";
        $("#q1ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, Mizuki tricks Naruto into stealing the Scroll of Sealing, and that's how he learns his signature multi shadow clone jutsu. So, honestly, it all turned out just fine.";
        $("#q1ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q1ca").innerHTML=answer
}
function question2(){
    let answer;
    if (document.getElementById("q2a4").checked==true){
        answer="Correct, As a member of the Seven Ninja Swordsmen of the Mist, Zabuza wielded the Executioner's Blade/Kubikiribocho. Haku saw himself as Zabuza's 'tool', but he wasn't a literal sword.";
        $("#q2ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, As a member of the Seven Ninja Swordsmen of the Mist, Zabuza wielded the Executioner's Blade/Kubikiribocho. Haku saw himself as Zabuza's 'tool', but he wasn't a literal sword.";
        $("#q2ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q2ca").innerHTML=answer
}
function question3(){
    let answer;
    if (document.getElementById("q3a2").checked==true){
        answer="Correct, Team Guy isn't part of the 'Rookie 9' classification during the Chunin Exams because Neji, Lee, and Tenten have already been an official team for a year by that point. Teams 7, 8, and 10 are fresh out of the Ninja Academy.";
        $("#q3ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, Team Guy isn't part of the 'Rookie 9' classification during the Chunin Exams because Neji, Lee, and Tenten have already been an official team for a year by that point. Teams 7, 8, and 10 are fresh out of the Ninja Academy.";
        $("#q3ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q3ca").innerHTML=answer
}
function question4(){
    let answer;
    if (document.getElementById("q4a1").checked==true){
        answer="Correct, Naruto accidentally summons Gamakichi during his fight against Gaara, but he's later able to summon Gamabunta to fight off Shukaku when the battle gets a bit too crazy.";
        $("#q4ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, Naruto accidentally summons Gamakichi during his fight against Gaara, but he's later able to summon Gamabunta to fight off Shukaku when the battle gets a bit too crazy.";
        $("#q4ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q4ca").innerHTML=answer
}
function question5(){
    let answer;
    if (document.getElementById("q5a4").checked==true){
        answer="Correct, The Akatsuki is trying to gather all of the tailed beasts, so Itachi and Kisame's objective is to capture Naruto. Luckily, he's not even in the village at this point in time.";
        $("#q5ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, The Akatsuki is trying to gather all of the tailed beasts, so Itachi and Kisame's objective is to capture Naruto. Luckily, he's not even in the village at this point in time.";
        $("#q5ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q5ca").innerHTML=answer
}
function question6(){
    let answer;
    if (document.getElementById("q6a3").checked==true){
        answer="Correct, Kakashi makes up tons of excuses for why he's always late, but the real reason is that he pays tribute to his fallen friends at the Memorial Stone every day.";
        $("#q6ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, Kakashi makes up tons of excuses for why he's always late, but the real reason is that he pays tribute to his fallen friends at the Memorial Stone every day.";
        $("#q6ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q6ca").innerHTML=answer
}
function question7(){
    let answer;
    if (document.getElementById("q7a3").checked==true){
        answer="Correct, Shisui Uchiha unlocked his Mangekyo Sharingan at the age of 7.";
        $("#q7ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, Shisui Uchiha unlocked his Mangekyo Sharingan at the age of 7.";
        $("#q7ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q7ca").innerHTML=answer
}
function question8(){
    let answer;
    if (document.getElementById("q8a4").checked==true){
        answer="Correct, The group is called the Sound Four, but technically it consists of Jirobo, Kidomaru, Tayuya, Sakon, and Ukon. Sakon and Ukon often share a single body. Those five are the ones who meet Sasuke in Konoha before he leaves.";
        $("#q8ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, The group is called the Sound Four, but technically it consists of Jirobo, Kidomaru, Tayuya, Sakon, and Ukon. Sakon and Ukon often share a single body. Those five are the ones who meet Sasuke in Konoha before he leaves.";
        $("#q8ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q8ca").innerHTML=answer
}
function question9(){
    let answer;
    if (document.getElementById("q9a1").checked==true){
        answer="Correct, The Fourth Mizukage, Yagura Karatachi, was the Jinchuriki of the Three Tails before he died. This is kind of a big deal since he's the only Kage to live for quite some time with a Tailed Beast inside him.";
        $("#q9ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, The Fourth Mizukage, Yagura Karatachi, was the Jinchuriki of the Three Tails before he died. This is kind of a big deal since he's the only Kage to live for quite some time with a Tailed Beast inside him.";
        $("#q9ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q9ca").innerHTML=answer
}
function question10(){
    let answer;
    if (document.getElementById("q10a1").checked==true){
        answer="Correct, Rock Lee opens up five of the Eight Gates in his action-packed fight against Gaara. He opens the Gate of Closing just before performing the Hidden Lotus.";
        $("#q10ca").css({'color':'green', 'font-weight': 'bold'});
        i=i+1;
    }else{
        answer="Wrong, Rock Lee opens up five of the Eight Gates in his action-packed fight against Gaara. He opens the Gate of Closing just before performing the Hidden Lotus.";
        $("#q10ca").css({'color':'red', 'font-weight': 'bold'});
    }
    document.getElementById("q10ca").innerHTML=answer
}
function QuizResult(){
        let score;
        var names = {};
        $(':radio').each(function() {
            names[$(this).attr('name')] = true;
        });
        var count = 0;
        $.each(names, function() { 
            count++;
        });
        if ($(':radio:checked').length != count) {
            alert("You must answer all the quiz questions!");
        }else if (i==0){
            score="Unfortunately, You haven't got any correct answer. I advise you to rewatch the Show!<br> Score:"
            document.getElementById("score").innerHTML=(`${score} ${i} ${"/10"}`);
        }else if (i<=5 && i>0){
            score="Not Bad! You're an average Naruto Fan.<br> Score:"
            document.getElementById("score").innerHTML=(`${score} ${i} ${"/10"}`);
        }else if (i<=9 && i>5){
            score="Awesome! You are amongst the best fans of the franchise.<br> Score:"
            document.getElementById("score").innerHTML=(`${score} ${i} ${"/10"}`);
        }else if (i==10){
            score="Excellent! You are literally a Naruto God, You'll probably do so good in game <3<br> Score:"
            document.getElementById("score").innerHTML=(`${score} ${i} ${"/10"}`);
        }
}



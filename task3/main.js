$(function () {
    let currentQuiz = null;
    $("#startButton").on("click", function(){
        console.log("123");
        if(currentQuiz == null){
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(
                    `<input name='options' type='radio' value='${index}'><labal>${element[0]}</labal><br><br>`
                );
            });
            $("#startButton").attr("value","下一題");
        }
        else{
            $.each($(":radio"),function(i, val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        let finalResult=questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }
                    else{
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element, index, array){
                            $("#options").append(
                                `<input name='options' type='radio' value='${index}'><labal>${element[0]}</labal><br><br>`
                            );
                        });
                    }
                    return false;
                }
            });

        }
    });
    

});
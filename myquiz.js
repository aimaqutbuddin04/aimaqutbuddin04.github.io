
function correctAnswer()
{
    var feedback = [];
    var score = 0;
    var q1answer = document.aqquiz.a1.value.toLowerCase();
    if (q1answer === '2004') //question1
    {
        score = score + 1;
        feedback.push("The answer to question 1 was correct! Aima was born January 30th, 2004!");
    }
    else
   {
       feedback.push("The answer you gave for question 1 was incorrect. Aima was actually born in 2004.");
   }


   if (document.aqquiz.a2.value === 'twins') //question2
    {
        score = score + 1;
        feedback.push("The answer to question 2 was correct! Aima has older sisters and they're fraternal twins.");
    }
    else
    {
        feedback.push("The answer you gave to question 2 was incorrect. Aima has older sister that are twins.");
    }


    if (document.aqquiz.a3.value === 'no') //question3
    {
        score = score + 1;
        feedback.push("The answer to question 3 was correct! Aima has not had any pets.");
    }
    else
    {
        feedback.push("The answer to question 3 was incorrect. Aima doesn't have any pets. ");
    }


    if (document.aqquiz.a4.value === 'Northwestern') //question4
    {
        score = score + 1;
        feedback.push("The answer to question 4 was correct. Aima has wanted to go to Northwestern since she was 10 years old.");
    }
    else
    {
        feedback.push("The answer you gave to question 4 was incorrect. The correct answer is Northwestern University.");
    }


    var q5answer = document.aqquiz.a5.value.toLowerCase();
    if (q5answer  === 'black panther') //question5
    {
        score = score + 1;
        feedback.push("The answer to question 5 was correct. Aima's favorite movie is Black Panther.");
    }
    else
    {
        feedback.push("The answer to question 5 was incorrect. Aima's favorite movie is actually Black Panther.");
    }


    if (document.aqquiz.a6.value === 'true') //question6
    {
        score = score + 1;
        feedback.push("The answer to question 6 was correct. Aims went to Pakistan when she was 4 years old.");
    }
    else
    {
        feedback.push("The answer to question 6 was incorrect. Aima has been out of the country.");
    }


    if (document.aqquiz.a7a.checked === true && document.aqquiz.a7c.checked === true) //question7
    {
        if (document.aqquiz.a7b.checked === true || document.aqquiz.a7d.checked === true || document.aqquiz.a7e.checked === true) {
            feedback.push("The answer to question 7 was incorrect. The answers were Harry Potter and Hunger Games series.");

        }
        else {
            score = score + 1;
            feedback.push("The answer to question 7 was correct. Harry Potter is way better also! ");
        }
    }
    else
    {
           feedback.push("The answer to question 7 was incorrect. The answers were Harry Potter and Hunger Games series.");
    }

    if (document.aqquiz.a8a.checked === true && document.aqquiz.a8e.checked === true) //question8
    {
        if (document.aqquiz.a7b.checked === true || document.aqquiz.a8c.checked === true || document.aqquiz.a8d.checked === true) {
            feedback.push("The answer to question 8 was incorrect. The answers were 1-2 and 9-10.");
        }
        else
            {
                score = score + 1;
            feedback.push("The answer to question 8 was correct. I guess you figured it out. ");
        }
    }
        else
        {
            feedback.push("The answer to question 8 was incorrect. The answers were 1-2 and 9-10.");
        }

    if (document.aqquiz.a9.value === 'Iceland')
    {
        score = score + 1;
        feedback.push("The answer to question 9 was correct. Aima does want to go to Iceland. ");
    }
    else
    {
        feedback.push("The answer to question 9 was incorrect. Aima wants to go to Iceland.");
    }


    var q10answer = document.aqquiz.a10.value.toLowerCase();
    if (q10answer === "tennis")
    {
        score = score + 1;
        feedback.push("The answer to question 10 was correct. ");
    }
    else
    {
        feedback.push( "The answer to question 10 was incorrect. The answer was Tennis.");
    }

    return feedback[0] + "<br>"+ feedback[1] + "<br>" + feedback[2] + "<br>" + feedback[3] + "<br>" +  feedback[4] + "<br>" +  feedback[5] + "<br>" +
        feedback[6] + "<br>" +  feedback[7] + "<br>" +  feedback[8] + "<br>" +  feedback[9] + "<br>" + "Your score is: " + score


}


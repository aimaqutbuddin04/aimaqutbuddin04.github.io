
function assignGrade() {
    var num1 = Number(document.project1.num1.value);

    if (num1 >= 90)
    {
        return "A";
    }
    else if (num1 >= 80)
    {
        return "B";
    }
    else if (num1 >= 70)
    {
        return "C";
    }
    else if (num1 >= 60)
    {
        return "D";
    }
    else if  (num1 >= 0)
    {
        return "F";
    }
}
function temperatureBug()
{
    var temp = Number(document.project2.num1.value);
    var image = document.getElementById("weather");
    if (temp >= 136)
    {
        image.src = "beyond.png";
        return "BEYOND EARTH";
    }
    else if (temp >= 75)
    {
        image.src = "summerr.jpg";
        return "SUMMER! WOOHOOO!!";
    }
    else if (temp >= 50)
    {
        image.src = "springing.jpg";
        return "IT'S SPRINGIN'";
    }
    else if (temp >= 35)
    {
        image.src = "fall.jpg ";
        return "COZI FALL";
    }
    else
    {
        image.src = "winter.jpg ";
        return " WINTER WONDERLAND";

    }

}
function CalorieCounter()
{
    var activity = document.getElementById('activity').value;
    var minutes = document.project3.minutes.value;
    if(activity == "Tennis")
    {
        return 7 * minutes + " " + "Calories Burned";
    }
    else if(activity == "Bowling")
    {
       return 3 * minutes + " " + "Calories Burned";
    }
    else if(activity == "Running")
    {
        return 8 * minutes + " " + "Calories Burned";
    }
    else if (activity == "Basketball")
    {
        return 6 * minutes + " " + "Calories Burned";
    }
}
function dice_rand(n){
    var sum = 0;
    var dices = [];
    var dice;
    var success = 0;
    var fail = 0;
    
    for(i=1;i<=n;i++){
        dice = Math.floor((Math.random() * 6) + 1);
        sum += dice;
        dices.push(dice);
        dice = null;
        
    }
    
    var result_html = " <br /> <br />";
    var a = 0;
    while(dices[a])
    {
        ;
        if(dices[a] == 1 || dices[a] == 2)
        {
            result_html += "<img src='images/fate/failure.PNG' />";
            fail += 1;
        }
        else if(dices[a] == 3 || dices[a] == 4)
        {
            result_html += "<img src='images/fate/nothing.PNG' />";
        }
        else if(dices[a] == 5 || dices[a] == 6)
        {
            result_html += "<img src='images/fate/success.PNG' />";
            success += 1;
        }
        
        a++;
        
    }
    var difference = function (a, b) 
    { 
        if(a>b)
        {
            return Math.abs(a - b) + " - successes"; 
        }
        else if (b>a)
        {
            return Math.abs(b - a) + " - fails";
        }
        else if(a=b)
        {
            return " 0 successes";
        }
    }
    
    var b = document.getElementById("mod").value;
    b = parseInt(b);
    success = parseInt(success);
    fail = parseInt(fail);
    success += b;
    
    document.getElementById("fate").innerHTML = result_html + "<br>" + "result: " + difference(success, fail);
    
    
}
document.getElementById("Roll").addEventListener("click", function() 
{
    
var liczba = 4;
    liczba =  parseInt(liczba);
    dice_rand(liczba);
});
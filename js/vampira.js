var dice_fail = 0;
var dice_success = 0;
var dice_crit = 0;
var bestial = 0;
var blood_fail = 0;
var blood_success = 0;
var blood_crit = 0;
var messy_crit = 0;
var roll = 0;
var all_success = 0;
var all_crit = 0;
var willpower_success = 0;
var willpower_crit = 0;
var result_html = " ";

function zliczanie()
{
    var dice = document.getElementById("Dice_pool").value;
	dice = parseInt(dice);

	var hunger = document.getElementById("Hunger").value;
	hunger = parseInt(hunger);

	if(hunger == 0)
	{
		blood_fail = 0;
		blood_crit = 0;
		blood_success = 0;
	}
	
	if(dice > hunger)
	{
		all_success = dice_success + blood_success + willpower_success;
		all_crit = dice_crit + blood_crit + willpower_crit;
	}
	else if (dice <= hunger)
	{
		all_success = blood_success;
		all_crit = blood_crit;
	}
    
	var i = 1;

	while (i <= all_crit)
	{
			
		if(i == 2 || i == 4 || i == 6 || i == 8 || i == 10 || i == 12)
		{
			all_success+=3;
		}
		else if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11)
		{
			all_success++;
		}
		i++;
	}
		
	var diff = document.getElementById("Difficulty").value;
	diff = parseInt(diff);

	if(all_success == 1 && bestial == 0)
	{
		document.getElementById("result").innerHTML = all_success+ " Success";
	} 
    else if(all_success == 1 && bestial >=1)
	{
		all_success = all_success - bestial;
		
		if(all_success <= 0)
		{
			document.getElementById("result").innerHTML =" 0 Successes";
		}
		else if(all_success >= 1)
		{
			document.getElementById("result").innerHTML = all_success+ " Success";
		}
	}
	else if (all_success> 1 && bestial == 0)
	{
			document.getElementById("result").innerHTML = all_success+ " Successes";
	}else if (all_success > 1 && bestial >= 1)
	{
		all_success = all_success - bestial;
		
		if(all_success <= 0)
		{
			document.getElementById("result").innerHTML = " 0 Successes";
		}
		else 
		{
			document.getElementById("result").innerHTML = all_success+ " Success";
		}
			
	}
	else if (all_success<= 0)
	{
		document.getElementById("result").innerHTML = " Failure ";
	}

	if(bestial == 0 && messy_crit == 0)
	{
		document.getElementById("crit_info").innerHTML = " ";
	}
	else if (bestial >=1 && messy_crit >=1)
	{
		document.getElementById("crit_info").innerHTML = " Possile bestial failure |" + " Possible messy crit ";
	} 
	else if(messy_crit >= 1 && bestial >=0)
	{
		document.getElementById("crit_info").innerHTML = " Possible messy crit ";
	}		
    else if (bestial >=1 && messy_crit >=0)
	{
		document.getElementById("crit_info").innerHTML = " Possile bestial failure ";
	}

	if(diff == 0)
	{
		document.getElementById("diff_results").innerHTML = " ";
	}
	else if(diff > 0 && diff > all_success)
	{
		document.getElementById("diff_results").innerHTML = "Failure";
	}
	else if(diff > 0 && diff <= all_success)
	{
		document.getElementById("diff_results").innerHTML = "Success";
	}
	wyswietl();

}

function wyswietl()
{
	var hunger = document.getElementById("Hunger").value;
	hunger = parseInt(hunger);

	var dice = document.getElementById("Dice_pool").value;
	dice =  parseInt(dice);
	
	result_html = " ";

	var b_succ = blood_success;
	var d_succ = dice_success;
	if(bestial >= 1)
	{
		if(b_succ >= bestial)
		{
			b_succ = b_succ-bestial;
		}
		else if(d_succ >= bestial)
		{
			d_succ = d_succ - bestial;
		}
	}
	if(hunger > 0)
	{
		for(t=0; t<blood_crit; t++)
    	{
     	   result_html += "<img src='images/vampire/red-crit.PNG' />";
    	}
		for(i=0; i<blood_success; i++)
   		{
    	    result_html += "<img src='images/vampire/red-success.PNG' />";
    	}
    	for(m=0; m<blood_fail; m++)
    	{
			result_html += "<img src='images/vampire/red-fail.PNG' />";
    	}
    	for(l=0; l<bestial; l++)
    	{
    	    result_html +="<img src='images/vampire/bestial-fail.PNG' />";
    	}
		for(l=0; l<dice_crit; l++)
		{
			result_html += "<img src='images/vampire/normal-crit.PNG' />";
		}
		for(m=0; m<dice_success; m++)
		{
			result_html +="<img src='images/vampire/normal-success.PNG' />";
		}
		for(k=0; k<dice_fail; k++)
		{
			result_html +=  "<img src='images/vampire/normal-fail.PNG' />";
		}
	}
	else if(hunger == 0)
	{
		for(l=0; l<dice_crit; l++)
		{
			result_html += "<img src='images/vampire/normal-crit.PNG' />";
		}
		for(m=0; m<dice_success; m++)
		{
			result_html +="<img src='images/vampire/normal-success.PNG' />";
		}
		for(k=0; k<dice_fail; k++)
		{
			result_html +=  "<img src='images/vampire/normal-fail.PNG' />";
		}
	}

	document.getElementById("dice_results").innerHTML =" " + result_html + " ";
}

function dice_pool(n)
{
    dice_success = 1;
    dice_fail = 0;
    dice_crit = 0;

	var dices = [];
	var dice;
		
	for(i=1;i<n;i++)
	{
		dice = Math.floor((Math.random() * 10) + 1);
		dices.push(dice);
		dice = null;
	}
	var wyswietl = document.getElementById("willpower_reroll");
	var przycisk = document.getElementById("Roll_willpower");
	var result_html = "";
	var a = 0;
	while(dices[a])
	{
		if(dices[a] >= 1 && dices[a] <3)
		{
			dice_fail++;
		}
		else if(dices[a] >= 3 && dices[a] <=9)
		{
			dice_success++;
		}
		else if(dices[a] == 10)
		{
			dice_crit++;
		}
		a++;
	}
	
	if(n >= 1)
	{
		document.getElementById("dice_results").innerHTML ="<br>" + result_html + "<br>";
		wyswietl.style.display = "block";
		przycisk.style.display = "block";
	}
	
	roll = 0;
        
}
function blood(n)
{
    blood_success = 1;
    blood_fail = 0;
    blood_crit = 0;
    bestial = 0;
    messy_crit = 0;

	var dices = [];
	var dice;

	for(i=1;i<n;i++)
	{
		dice = Math.floor((Math.random() * 10) + 1);
		dices.push(dice);
		dice = null;
	}
	var a = 0;
	while(dices[a])
	{
		if(dices[a] == 1)
		{
			bestial+=1;
		}
		else if(dices[a] >= 2 && dices[a] <5)
		{
			blood_fail++;
		}
		else if(dices[a] >=5 && dices[a] <=9)
		{
			blood_success++;
		}
		else if(dices[a] ==10)
		{
			blood_crit++;
		}
		a++;
	} 

	if(n >= 1)
	{
		if(blood_crit >= 1)
		{
			if(blood_crit + dice_crit >= 2)
			{
				messy_crit +=1;
			}
		}

	}
        
}

document.getElementById("Roll").addEventListener("click", function() 
{
    dice_fail = 0;
    dice_success = 0;
    dice_crit = 0;
    bestial = 0;
    blood_fail = 0;
    blood_success = 0;
    blood_crit = 0;
    messy_crit = 0;
    all_success = 0;
    all_crit = 0;
    willpower_success = 0;
    willpower_crit = 0;
	result_html = " ";

	var dice = document.getElementById("Dice_pool").value;
	dice =  parseInt(dice);
    
	var hunger = document.getElementById("Hunger").value;
	hunger =  parseInt(hunger);
    
	if(hunger > 0)
	{
		if(hunger >= dice)
		{
			blood(dice);
			document.getElementById("dice_results").innerHTML = " ";
		}
		else if (hunger < dice)
		{
			dice = dice - hunger;
			dice_pool(dice);
			blood(hunger);
		}
	}
	else
	{
		dice_pool(dice);
	}
	zliczanie();
});	
	
function reroll()
{
	var willpower = document.getElementById("willpower").value;
	willpower = parseInt(willpower);
		
	if(willpower <= dice_fail)
	{
		reroll_dice_pool(willpower);
	}
	else if(willpower >= dice_fail)
	{
		reroll_dice_pool(dice_fail);
	}
}
function reroll_dice_pool(n)
{
	var dices = [];
	var dice;
        
	willpower_success = 0;
	willpower_crit = 0;

	for(i=1;i<=n;i++)
	{
		dice = Math.floor((Math.random() * 10) + 1);
		dices.push(dice);
		dice = null;
	}
	var a = 0;

	while(dices[a])
	{
		if(dices[a] > 3 && dices[a] <=9)
		{
			dice+=1;
            dice_success++;
            dice_fail--;
		}
		else if(dices[a] == 10)
		{
			all_crit +=1;
            dice_fail--;
            dice_crit++;
		}
		a++;
	}
}
	
document.getElementById("Roll_willpower").addEventListener("click", function()
{
	reroll();
	zliczanie();
	var przycisk = document.getElementById("Roll_willpower");
	przycisk.style.display = "none";
			
});
	
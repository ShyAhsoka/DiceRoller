
	// czterościenna	
	function cztery(n)
	{
		var sum = 0;
		var dices = [];
		var dice;
		
		for(i=1;i<=n;i++){
			dice = Math.floor((Math.random() * 4) + 1);
			sum += dice;
			dices.push(dice);
			dice = null;
		}
		
		var result_html = "";
		var a = 0;
		while(dices[a]){
			result_html += dices[a]+ ", ";
			a++;
		}
        if(n>0)
        {
            document.getElementById("four").innerHTML = result_html;
        }
    }
    // sześciościenna
    function szesc(e)
	{
		var sum = 0;
		var dices = [];
		var dice;
		
		for(i=1;i<=e;i++){
			dice = Math.floor((Math.random() * 6) + 1);
			sum += dice;
			dices.push(dice);
			dice = null;
		}
		
		var result_html = "";
		var a = 0;
		while(dices[a]){
			result_html += dices[a]+ ", ";
			a++;
		}
        if(e>0)
        {
            document.getElementById("six").innerHTML =result_html;
        }
    }

    //ośmiościenna
    function osiem(f)
	{
		var sum = 0;
		var dices = [];
		var dice;
		
		for(i=1;i<=f;i++){
			dice = Math.floor((Math.random() * 8) + 1);
			sum += dice;
			dices.push(dice);
			dice = null;
		}
		
		var result_html = "";
		var a = 0;
		while(dices[a]){
			result_html += dices[a]+ ", ";
			a++;
		}
        if(f>0)
        {
            document.getElementById("eight").innerHTML =result_html;
        }
    }

    // dziesiecioscienna
    function dziesiec(g)
	{
		var sum = 0;
		var dices = [];
		var dice;
		
		for(i=1;i<=g;i++){
			dice = Math.floor((Math.random() * 10) + 1);
			sum += dice;
			dices.push(dice);
			dice = null;
		}
		
		var result_html = "";
		var a = 0;
		while(dices[a]){
			result_html += dices[a]+ ", ";
			a++;
		}
        if(g>0)
        {
            document.getElementById("ten").innerHTML =result_html;
        }
    }
    //dwunastoscienna
    function dwanascie(h)
	{
		var sum = 0;
		var dices = [];
		var dice;
		
		for(i=1;i<=h;i++){
			dice = Math.floor((Math.random() * 12) + 1);
			sum += dice;
			dices.push(dice);
			dice = null;
		}
		
		var result_html = "";
		var a = 0;
		while(dices[a]){
			result_html += dices[a]+ ", ";
			a++;
		}
        if(h>0)
        {
            document.getElementById("twelwe").innerHTML =result_html;
        }
    }
    // dwudziestoscienna
    function dwadziescia(j)
	{
		var sum = 0;
		var dices = [];
		var dice;
		
		for(i=1;i<=j;i++){
			dice = Math.floor((Math.random() * 20) + 1);
			sum += dice;
			dices.push(dice);
			dice = null;
		}
		
		var result_html = "";
		var a = 0;
		while(dices[a]){
			result_html += dices[a]+ ", ";
			a++;
		}
        if(j>0)
        {
            document.getElementById("twenty").innerHTML =result_html;
        }
    }
    // stuscienna
    function sto(k)
	{
		var sum = 0;
		var dices = [];
		var dice;
		
		for(i=1;i<=k;i++){
			dice = Math.floor((Math.random() * 100) + 1);
			sum += dice;
			dices.push(dice);
			dice = null;
		}
		
		var result_html = "";
		var a = 0;
		while(dices[a]){
			result_html += dices[a]+ ", ";
			a++;
		}
        if(k>0)
        {
            document.getElementById("hundred").innerHTML =result_html;
        }
	}
    document.getElementById("Roll").addEventListener("click", function() 
	{
	var liczba = document.getElementById("D4").value;
		liczba =  parseInt(liczba);
        cztery(liczba);
    var liczba2 = document.getElementById("D6").value;
		liczba2 =  parseInt(liczba2);
        szesc(liczba2);
    var liczba3 = document.getElementById("D8").value;
		liczba3 =  parseInt(liczba3);
        osiem(liczba3);
    var liczba4 = document.getElementById("D10").value;
		liczba4 =  parseInt(liczba4);
        dziesiec(liczba4);
    var liczba5 = document.getElementById("D12").value;
		liczba5 =  parseInt(liczba5);
        dwanascie(liczba5);
    var liczba6 = document.getElementById("D20").value;
		liczba6 =  parseInt(liczba6);
		dwadziescia(liczba6);
    var liczba7 = document.getElementById("D100").value;
		liczba7 =  parseInt(liczba7);
		sto(liczba7);
	});

class main{
	constructor()
	{
	this.score=0
	this.balls=36
	this.wickets=0
	this.ballfaced=0
	this.player_score=0
	this.players1=[]
	this.players2=[]
	this.i=0
	this.previous_score=0
	
	}

}
t1=new main()
t2=new main()

function one(){
	
	
   if(t1.wickets<10 && t1.balls>0)
   {
	   
	   var hit=Math.floor(Math.random() * 7)
	   if(hit===0 || t1.ballfaced>5)
	   {   
   
           for(var j=0;j<t1.players1.length;j++)
		   {
			   t1.previous_score=t1.previous_score+t1.players1[j]
		   }
   
           //t1.previous_score= t1.players=> t1.players.reduce((a,b) => a + b, 0)
		   //console.log(t1.previous_score)
		   t1.player_score=t1.score-t1.previous_score
		   t1.players1[t1.i]=t1.player_score
		   t1.i=t1.i+1
           console.log(t1.players1)
		   
		   t1.wickets=t1.wickets+1
		   t1.ballfaced=0
		   t1.previous_score=0
		   
		   
	   }
	   else
	   {
		   console.log("hit by batsmen "+hit)
		   t1.score=t1.score + hit
		   t1.ballfaced=t1.ballfaced+1
		   
		   
	   }
		
		t1.balls=t1.balls-1
		
		if(t1.balls==0)
		{
			for(var j=0;j<t1.players1.length;j++)
		   {
			   t1.previous_score=t1.previous_score+t1.players1[j]
		   }
			 t1.player_score=t1.score-t1.previous_score
			 t1.players1[t1.i]=t1.player_score
			console.log(t1.players1)
		}
		 
   }
   
   
   document.getElementById("screen").value="score "+t1.score+"-"+t1.wickets
   
	
}



function two()
{
		
   if(t2.wickets<10 && t2.balls>0)
   {
	   
	   var hit=Math.floor(Math.random() * 7)
	   if(hit===0 || t2.ballfaced>5)
	   {   
   
           for(var j=0;j<t2.players2.length;j++)
		   {
			   t2.previous_score=t2.previous_score+t2.players2[j]
		   }
   
           //t1.previous_score= t1.players=> t1.players.reduce((a,b) => a + b, 0)
		   //console.log(t1.previous_score)
		   t2.player_score=t2.score-t2.previous_score
		   t2.players2[t2.i]=t2.player_score
		   t2.i=t2.i+1
           console.log(t2.players2)
		   
		   t2.wickets=t2.wickets+1
		   t2.ballfaced=0
		   t2.previous_score=0
		   
		   
	   }
	   else
	   {
		   console.log("hit by batsmen "+hit)
		   t2.score=t2.score + hit
		   t2.ballfaced=t2.ballfaced+1
		   
		   
	   }
		
		t2.balls=t2.balls-1
		
		if(t2.balls==0)
		{
			for(var j=0;j<t2.players2.length;j++)
		   {
			   t2.previous_score=t2.previous_score+t2.players2[j]
		   }
			 t2.player_score=t2.score-t2.previous_score
			 t2.players2[t2.i]=t2.player_score
			console.log(t2.players2)
		}
		 
   }
   
   
   document.getElementById("screen").value="score "+t2.score+"-"+t2.wickets

	
}

function declar()

{
	var tea1=t1.score
	var tea2=t2.score
	var play1=t1.players1
	var play2=t2.players2
	localStorage.setItem("sc1",tea1)
	localStorage.setItem("sc2",tea2)
	localStorage.setItem("ply1",play1)
	localStorage.setItem("pla2",play2)
	
	window.location.assign("secondcric.html")
	
/*	if(t1.score>t2.score)
{
	document.getElementById("screen").value="team1 wins"
}
else
{
	document.getElementById("screen").value="team2 wins"
	
}*/
}
document.body.style.backgroundImage = "url('1.JPG')";

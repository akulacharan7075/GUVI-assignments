class main{
	constructor(score_p,balls_p,wickets_p,ballfaced_p,player_score_p,players1,players2,i_p,previous_score_p)
	{
	this.score=score_p
	this.balls=balls_p
	this.wickets=wickets_p
	this.ballfaced=ballfaced_p
	this.player_score=player_score_p
	this.players1=[]
	this.players2=[]
	this.i=i_p
	this.previous_score=previous_score_p
	
	}





one(){
	var total=this.score
	
	
   if(this.wickets<10 && this.balls>0)
   {
	   
	   var hit=Math.floor(Math.random() * 7)
	   if(hit===0 || this.ballfaced>5)
	   {   
   
           for(var j=0;j<this.players1.length;j++)
		   {
			   this.previous_score=this.previous_score+this.players1[j]
		   }
   
           //t1.previous_score= t1.players=> t1.players.reduce((a,b) => a + b, 0)
		   //console.log(t1.previous_score)
		   this.player_score=total-this.previous_score
		   this.players1[this.i]=this.player_score
		   this.i=this.i+1
           console.log(this.players1)
		   
		   this.wickets=this.wickets+1
		   this.ballfaced=0
		   this.previous_score=0
		   
		   
	   }
	   else
	   {
		   console.log("hit by batsmen "+hit)
		   total=total + hit
		   this.ballfaced=this.ballfaced+1
		   
		   
	   }
		
		this.balls=this.balls-1
		
		if(this.balls==0)
		{
			for(var j=0;j<this.players1.length;j++)
		   {
			   this.previous_score=this.previous_score+this.players1[j]
		   }
			 this.player_score=total-this.previous_score
			 this.players1[this.i]=this.player_score
			console.log(this.players1)
		}
		 
   }
   
   
   document.getElementById("screen").value="score "+total+"-"+this.wickets
   
	
}
}
t1=new main(0,36,0,0,0,[],[],0)
t1.one()


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

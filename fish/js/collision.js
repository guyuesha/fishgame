//大鱼果实的距离
function momFruitsCollision()
{
	if(!data.gameOver)
	{
		for(var i=0;i<fruit.num;i++)
		{
			if(fruit.alive[i])
			{
				var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if(l<900)
				{
					fruit.dead(i);
					data.fruitNum++;
					mom.bigBodyCount++;
					if(mom.bigBodyCount>7)
						mom.bigBodyCount=7;
					if(fruit.fruitType[i]=="blue")
					{
						data.double=2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
	
	
}

function momBabyCollision()
{
	if(!data.gameOver)
	{
		if(data.fruitNum>0)
		{
			var l=calLength2(mom.x,mom.y,baby.x,baby.y);
			if(l<900)
			{
				baby.babyBodyCount=0;
				data.addScore();
				mom.bigBodyCount=0;
				halo.born(baby.x,baby.y);
			}
		}
	}
	
}


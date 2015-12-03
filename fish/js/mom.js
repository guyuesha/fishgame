var momObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.bigEyeTimer=0;
	this.bigEyeCount=0;
	this.bigEyeInterval=2000;
	this.bigBody=new Image();
	this.bigTailTimer=0;
	this.bigTailCount=0;
	this.bigBodyCount=0;
}
momObj.prototype.init=function()
{
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
}

momObj.prototype.draw=function()
{
	//lerp x,y
	this.x = lerpDistance(mx,this.x,0.95);
	this.y = lerpDistance(my,this.y,0.95);

	//delta angle Math.atan2(y,x);
	var deltaY=my-this.y;
	var detlaX=mx-this.x;
	var beta=Math.atan2(deltaY,detlaX)+Math.PI;//-PI,PI

	//lerp angle
	this.angle=lerpAngle(beta,this.angle,0.6);

	this.bigTailTimer+=deltaTime;
	if(this.bigTailTimer>50)
	{
		this.bigTailCount=(this.bigTailCount+1)%8;
		this.bigTailTimer %=50;
	}

	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval)
	{
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer %= this.bigEyeInterval;
		if(this.bigEyeCount==0)
		{
			this.bigEyeInterval=Math.random()*1500+2000;
		}else
		{
			this.bigEyeInterval=200;
		}
	}

	var bigTailCount= this.bigTailCount;
	var bigEyeCount=this.bigEyeCount;


	ctx1.save();
	ctx1.translate(this.x,this.y);//指定相对原点值
	ctx1.rotate(this.angle);
	ctx1.drawImage(momTail[bigTailCount],-momTail[bigTailCount].width*0.5+30,-momTail[bigTailCount].height*0.5);
	var bigBodyCount=this.bigBodyCount;
	if(data.double==1)
	{
		ctx1.drawImage(momBodyOra[bigBodyCount],-momBodyOra[bigBodyCount].width*0.5,-momBodyOra[bigBodyCount].height*0.5);
	}
	else
		ctx1.drawImage(momBodyBlue[bigBodyCount],-momBodyBlue[bigBodyCount].width*0.5,-momBodyBlue[bigBodyCount].height*0.5);
	ctx1.drawImage(momEye[bigEyeCount],-momEye[bigEyeCount].width*0.5,-momEye[bigEyeCount].height*0.5);
		ctx1.restore();

}
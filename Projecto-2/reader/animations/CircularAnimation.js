function CircularAnimation(id,time,center,rad,stang,rtang)
{
	Animation.call(this,id,time);

	
	this.radius = rad;
	this.startang = stang;
	this.rotang = rtang;
	this.span = time;

	this.center = center;

	this.initial = true;
	this.ctime =0;

	this.finalAng = this.startang + this.rotang;

	console.log("FINAL ANG: " + this.finalAng);

	this.speed = this.rotang/(this.span*1000);

	console.log("FINAL ANG: " + this.speed);

	this.currentang = this.startang;

	this.currtime = 0;

}

CircularAnimation.prototype = Object.create(Animation.prototype);

CircularAnimation.prototype.constructor = CircularAnimation;

CircularAnimation.prototype.update = function(delta)
{

mat4.identity(this.matrix);

   if(this.ctime >= this.span)
   {
   	//this.currentang = this.startang + this.rotang;
   	this.done=true;
   }
   else
   {
	this.ctime = this.ctime + delta/1000;

	this.currentang = this.startang + this.rotang*(this.ctime/this.span)

	console.log("CURRENT ANG " + this.currentang);
   }




		mat4.translate(this.matrix,this.matrix,[this.center[0],this.center[1],this.center[2]]);
	//	console.log(nodematrix);
		mat4.rotate(this.matrix,this.matrix, (this.currentang*Math.PI)/180.0, [0,1,0]);
	//	console.log(nodematrix);
		mat4.translate(this.matrix, this.matrix,[this.radius,0,0]);

};

CircularAnimation.prototype.clone = function(delta) {
    return new CircularAnimation(this.id,
        this.span,
        this.center,
        this.radius,
        this.startang,
        this.rotang);
};
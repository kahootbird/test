var app = {
	//initial variables
	canvas  : null,
	context : null,

	//resizing
	width   : 800,
	height  : 400,

	//nodes
	nodes   : [],

	//timing
	timestamp  : 0,
	now        : 0,
	lastUpdate : 0,

//drawtext
	texttodraw: "",
	init : function(){
		this.canvas  = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');

		this.render();
		this.onInit();
	},
	//Draw text
	drawText: function(x,y,color,txttodraw)
	{
			texttodraw = txttodraw
			this.context.font = '48px Arial';
			this.context.fillStyle = color
			this.context.fillText(txttodraw, x, y);
	},

	drawCircle: function(x,y,radius,color)
	{
		this.context.fillStyle = color;
		this.context.beginPath();
		this.context.arc(x,y,radius,0,Math.PI*2,false);
		this.context.closePath();
		this.context.fill();
	},

	render : function(){
		this.clear();
		this.update();

		window.requestAnimationFrame(this.render.bind(this));
	},
	clear  : function(){
		this.context.clearRect(0, 0, this.width, this.height);
	},
	update : function(){
	    var dt = Date.now() - this.lastUpdate;

		this.onUpdate(dt);

		for(var index in this.nodes){
			var node = this.nodes[index];
			if (node.radius != null)
			{
				//console.log("NODE HAS RADIUS")
				this.drawCircle(node.x,node.y,node.radius,node.color)
			}
			else
			{
				this.context.fillStyle = node.color;
				this.context.fillRect(node.x, node.y, node.width, node.height);
			}
		}

		this.lastUpdate = Date.now();
		this.timestamp+=dt;
	},
	getNode : function(id){
		for(var index in this.nodes){
			var node = this.nodes[index];

			if(node.id == id){
				return node;
			}
		}

		return { x : null, y : null, width : null, height : null };
	},

	//events
	onInit   : function(){},
	onUpdate : function(){}
};

window.onload = function(){
	app.init();
};

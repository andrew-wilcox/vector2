function vector2(x, y){
	this.x = x;
	this.y = y;

	this.add = function (v) {
		if(typeof(v) === 'vector2')
		{
			return new vector2(this.x + v.x, this.y + v.y);
		}
		return new vector2(this.x + v, this.y + v);
	}

	this.subtract = function (v) {
		if(typeof(v) === 'vector2')
		{
			return new vector2(this.x - v.x, this.y - v.y);
		}
		return new vector2(this.x - v, this.y - v);
	}

	this.multiply = function (v) {
		if(typeof(v) === 'vector2')
		{
			return new vector2(this.x * v.x, this.y * v.y);
		}
		return new vector2(this.x * v, this.y * v);
	}

	this.divide = function (v) {
		if(typeof(v) === 'vector2')
		{
			return new vector2(this.x / v.x, this.y / v.y);
		}
		return new vector2(this.x / v, this.y / v);
	}

	this.add = function (v, component) {
		if(component == 'x')
		{
			return new vector2(this.x + v, this.y);
		}
		else
			return new vector2(this.x, this.y + v);
	}

	this.subtract = function (v, component) {
		if(component == 'x')
		{
			return new vector2(this.x - v, this.y);
		}
		else
			return new vector2(this.x, this.y - v);
	}

	this.multiply = function (v, component) {
		if(component == 'x')
		{
			return new vector2(this.x * v, this.y);
		}
		else
			return new vector2(this.x, this.y * v);
	}

	this.divide = function (v, component) {
		if(component == 'x')
		{
			return new vector2(this.x / v, this.y);
		}
		else
			return new vector2(this.x, this.y / v);
	}

	this.dot = function(v) {
		return (this.x*v.x + this.y*v.y);
	}

	this.length = function() {
		return (this.x^2 + this.y^2);
	}

	this.lerp = function(v, alpha) {
		return new vector2(
			this.x + (v.x - this.x) * alpha,
			this.y + (v.y - this.y) * alpha);
	}

	this.normalize = function() {
		len = this.length();
		this.x = this.x/len;
		this.y = this.y/len;
	}
}
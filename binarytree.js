//binary tree

function MakeBinaryTree(val) {
	this.value = val;
	this.left = null;
	this.right = null;
};

makeBinaryTree.prototype.add = function(val) {
	if(!this.value) this.value = val;
	if(val > this.value) {
		if(!this.right) {
			this.right = new makeBinaryTree(val);
		} else {
			this.right.add(val);
		}
	} else if(val < this.value) {
		if(!this.left) {
			this.left = new makeBinaryTree(val);
		} else {
			this.left.add(val);
		}
	}
};

makeBinaryTree.prototype.contains = function(val) {
	if(val === this.value) return true;
	if(val > this.value) {
		if(!this.right) {
			return false;
			} else {
				return this.right.contains(val);
			}
	} else if(val < this.value) {
		if(!this.left) {
			return false;
			} else {
				return this.left.contains(val);
			}
		}
};
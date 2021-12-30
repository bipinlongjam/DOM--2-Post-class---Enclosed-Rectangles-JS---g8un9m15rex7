//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}
const { Children } = require("react");
function contain(a, b) {
	let ans = {};
	let child = {};
	let flag = 0;
	let top1 = a.top ? parseInt(a.top) : 0;
	let bottom1 = a.bottom ? parseInt(a.bottom) : 0;
	let left1 = a.left ? parseInt(a.left) : 0;
	let right1 = a.right ? parseInt(a.right) : 0;
	let height1 = a.height ? parseInt(a.height) : 0;
	let width1 = a.width ? parseInt(a.width) : 0;

	let top2 = b.top ? parseInt(b.top) : 0;
	let bottom2 = b.bottom ? parseInt(b.bottom) : 0;
	let left2 = b.left ? parseInt(b.left) : 0;
	let right2 = b.right ? parseInt(b.right) : 0;
	let height2 = b.height ? parseInt(b.height) : 0;
	let width2 = b.width ? parseInt(b.width) : 0;

	if (top2 >= top1 && left2 >= left1 && right2 >= right1 && bottom2 >= bottom1) {
		if ((a.height && (top1 + height1 >= top2 + height2 && bottom1 + height1 >= bottom2 + height2) &&
			(left1 + width1 >= left2 + width2 && right1 + width1 >= right2 + width2)) ||
			(!a.height)
		) {
			if (a.top) {
				child.top = `${top2 - top1}px`;
			}
			if (a.left) {
				child.left = `${left2 - left1}px`;
			}
			if (a.bottom) {
				child.bottom = `${bottom2 - bottom1}px`;
			}
			if (a.right) {
				child.right = `${right2 - right1}px`;
			}
			if (a.height) {
				child.height = `${height2}px`;
				child.width = `${width2}px`;
			}
			ans = { ...a, children: [{ ...child, children: [] }] };
			flag = 1;
		}

	}
	if (flag === 0) {
		return -1;
	}
	return ans;
}
function updateStructure(rec1,rec2){
	//write your code
	let res = contain(rec1, rec2);
	if (res !== -1) {
		return res;
	}
	res = contain(rec2, rec1);
	if (res !== -1) {
		return res;
	}
	return rec1;
}

module.exports = updateStructure;

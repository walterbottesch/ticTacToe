const n = 3;
const m = 3;

function checkRow() {
    for(var j = 0; j < n * n; j+=n) {
        var xLine = 0;
        var oLine = 0;
        for(var i = j; i < j + m; i++) {
            var boxId = 'b' + i;
            var b = document.getElementById(boxId).value;
            if(b != "X") {
                xLine = 0;
            } else {
                xLine++;
            }
            if(b != "0") {
                oLine = 0;
            } else {
                oLine++;
            }
            if(xLine === m) {
                return 1;
            }
            if(oLine === m) {
                return 0;
            }
        }
        
    }
    return -1;
}

function checkCol() {
    for(var i = 0; i < n; i++) {
        var xLine = 0;
        var oLine = 0;
        for(var j = i; j < n * n ; j+=n) {
            var boxId = 'b' + j;
            var b = document.getElementById(boxId).value;
            if(b != "X") {
                xLine = 0;
            } else {
                xLine++;
            }
            if(b != "0") {
                oLine = 0;
            } else {
                oLine++;
            }
            if(xLine === m) {
                return 1;
            }
            if(oLine === m) {
                return 0;
            }
        }
    }
    return -1;
}

function checkDiag_1() {
    var xLine = 0;
    var oLine = 0;
    for(var i = 0; i < n * n; i+= (n + 1)) {
        var boxId = 'b' + i;
        var b = document.getElementById(boxId).value;
        if(b != "X") {
            xLine = 0;
        } else {
            xLine++;
        }
        if(b != "0") {
            oLine = 0;
        } else {
            oLine++;
        }
        if(xLine === m) {
            return 1;
        }
        if(oLine === m) {
            return 0;
        }
    }
    return -1;
}

 function checkDiag_2() {
    var xLine = 0;
    var oLine = 0;
    for(var i = 2; i < 7; i += 2 ) {
        var boxId = 'b' + i;
        var b = document.getElementById(boxId).value;
        if(b != "X") {
            xLine = 0;
        } else {
            xLine++;
        }
        if(b != "0") {
            oLine = 0;
        } else {
            oLine++;
        }
        if(xLine === m) {
            return 1;
        }
        if(oLine === m) {
            return 0;
        }
    }
    return -1;    
 }
 
function checkWin1() {
    if( checkRow() === 1 || checkCol()=== 1 || checkDiag_1() === 1 || checkDiag_2() === 1 ) {
        return 1;
    } else if( checkRow() === 0 || checkCol()=== 0 || checkDiag_1() === 0 || checkDiag_2() === 0 ) {
        return 0;  
    } else {
        return -1;
    }
}
function display() {
    const userInt = document.querySelectorAll("input");
    if(checkWin1() === 1) {
        document.getElementById('print').innerHTML = "Player X won";
        gameOver();
    } else if(checkWin1() === 0) {
        document.getElementById('print').innerHTML = "Player 0 won";
        gameOver();
        
    } else if(checkWin1() === -1 && checkMatchTie()) {
        document.getElementById('print').innerHTML = "Match Tie";
    } else {
        if (flag === 1) {
			document.getElementById('print').innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print').innerHTML = "Player 0 Turn";
		}
    }
}
function checkMatchTie() {
    var tie = true;
    for(var i = 0; i < 9; i++) {
        var btn = document.getElementById('b' + i);
        if(btn.value === '') {
           tie = false;
        }
    }
    return tie;
}
function gameOver() {
    for(var i = 0; i < 9; i++) {
        var btn = document.getElementById('b' + i);
        btn.disabled = true;
    }
}

function reset() {
	location.reload();
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

var flag = 1;
function mark(elm) {
	var b1 = elm.target;
	if(flag === 1) {
		b1.value = "X";
		b1.disabled = true;
		flag = 0;
	} else {
		b1.value = "0";
		b1.disabled = true;
		flag = 1;
	}
	checkWin1();
    display();
}
function evHandler1() {
	const btnGrid = document.querySelectorAll("input");
	for (const btn of btnGrid) {
		btn.addEventListener("click", mark);
	}
	const resetBtn = document.querySelector("button");
	resetBtn.addEventListener("click", reset);
}

window.onload = evHandler1;
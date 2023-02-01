function myFunction() {
    var x = document.getElementById("textarea").value.split(" ");
    for (var i = 0; i < x.length; i++) {
        if (isNaN(x[i])) {
            removeItemOnce(x, x[i]);
            i -=1;
            }}
        if (x == 0) {
            var c = "No value entered";
            var cc = "No value entered";
            var ccc = "No value entered";
            var cccc = "No value entered";
            var ccccc = "No value entered";}
        else {
        var c = 0;
        var cc = 1;
        var ccc = 1;
        var cccc = 1;
        var ccccc = (+x[0])
        for(var j = 0; j < x.length; j++) {
            c += (+x[j]);
            cc *= (+x[j]);
            cccc = c/x.length;
            if(j === 0){
                continue;
            }
            ccccc /= (+x[j]);
            }
        }
        if(x.length>1){
            ccc *=(-c)}
        else if (x.length == 1){
            ccc = (+x[0])
        }
        document.getElementById("sum").innerHTML =`Sum value : ${c}`;
        document.getElementById("multiply").innerHTML =`Multiply value : ${cc}`;
        document.getElementById("sub").innerHTML =`Sub value : ${ccc}`;
        document.getElementById("arith_mean").innerHTML =`Arithmetic mean value : ${cccc}`;
        document.getElementById("div").innerHTML =`Div value : ${ccccc}`;
    }

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

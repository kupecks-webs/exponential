console.log("22.js loaded sucessfully!")
document.getElementById("2-" + "1").innerHTML = 4
function pow(p1, p2) {
    return p1 ** p2
}
for(var i = 1; i < 100; i++) {
    var ii= i + 1
    var id= "2-" + i
    var dd= "2-" + ii
    var x = document.getElementById(id).innerHTML
    document.getElementById(dd).innerHTML = pow(x, 2)
    console.log(i + "done!")
}
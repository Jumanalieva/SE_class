function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) { 
        arr.splice(i, 1, "even index");
    }
    return arr;
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

console.log(replaceEvens(arr));


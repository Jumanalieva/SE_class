function StringLength(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big word");
        } else {
            resolve("Small Number");
        }
    });
}


StringLength("Hello, world!").then(message => console.log(message)); 
StringLength("Hi").then(message => console.log(message)); 

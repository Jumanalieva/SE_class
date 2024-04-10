let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(dogString, dogNames) {
    let lowerDogString = dogString.toLowerCase();
    let matchFound = false;

    dogNames.forEach(name => {
        let lowerCaseName = name.toLowerCase();
        if(lowerDogString.includes(lowerCaseName)) {
            console.log("Matched dog name: " + name);
            matchFound = true;
        }
    });

    if(!matchFound) {
        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);

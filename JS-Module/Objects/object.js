let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
};

function displayFavoriteDishes(objectN) {
    for (let key in objectN) {
        if (Array.isArray(objectN[key])) {
            if (typeof objectN[key][0] === 'object') {
                for (let item of objectN[key]) {
                    for (let subKey in item) {
                        console.log(`${subKey}: ${item[subKey]}`);
                    }
                }
            } else {
                console.log(`${key}: ${objectN[key].join(', ')}`);
            }
        } else {
            console.log(`${key}: ${objectN[key]}`);
        }
    }
}

displayFavoriteDishes(person3);

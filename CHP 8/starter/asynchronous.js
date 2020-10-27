/*
const second = () => {
    setTimeout(() => {
        console.log('Async buenos dias senor...');
    }, 3000);

    setTimeout(() => {
        console.log(`Async buenas tardes senor...`);
    }, 5000);

    setTimeout(() =>  {
        console.log('Async buenas noches senor...');
    }, 7000);
};

const first = () => {
    console.log(`Senor Aniks...`);
    second();
    
    setTimeout(() => {
        console.log(`The End`);
    }, 10000)
};
first();
*/

/* Call back hell

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 298];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {title: 'Banga Soup with Nsala', publisher: 'Mrs Anene'};
            console.log(`${id}: ${recipe.title}, published by ${recipe.publisher}.`);

            setTimeout(publisher => {
                const recipe2 = {title: 'Ofe Akpu with goat meat', publisher: 'Mrs Anene'};
                publisher === recipe2.publisher ? console.log(recipe2) : console.log('We have a different publisher...');
            }, 2500, recipe.publisher)
        }, 3500, recipeID[3])
    }, 4500);
};

getRecipe();
*/

/* // Callback Hell to Promises

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 298]);
    }, 2500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Banga Soup with Nsala', publisher: 'Mrs Anene'};
            resolve(`${ID}: ${recipe.title}, published by ${recipe.publisher}`);
        }, 2500, recID)
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe2 = {title: 'Ofe Akpu with goat meat', publisher: 'Mrs Anene'};
            publisher === recipe2.publisher ? console.log(recipe2) : console.log('We have a different publisher...');
            resolve(`${pub}: ${recipe2.title}`)
        }, 2500, publisher)
    })
};

getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[3])
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Mrs Anene')
})
.then(recipe2 => {
    console.log(recipe2);
})
.catch(error => {
    console.log('ERROR!!!');
});
*/

// From Promises to Async/Await

// async function getRecipesAW() {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[3]);
//     console.log(recipe);
//     const related = await getRelated('Mrs Anene');

//     return recipe;
// };
// getRecipesAW().then(result => console.log(`${result} is the best ever!`));

/*
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(result => {return result.json()})
    .then(data => console.log(data))
    .catch(err => console.log('We fucked up!'))
*/


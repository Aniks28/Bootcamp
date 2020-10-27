console.log(`We are live, my liege!`);

async function pets() {
    const data = (await (await fetch("https://dog.ceo/api/breeds/list/all")).json())
    createBreedList(data.message);
}
pets();

// document.addEventListener("DOMContentLoaded", async () => {
//     let dogList = [];

//     try {
//         dogList = await pets();
        
//     } catch (error) {
//         console.log(`We haff fucked up!`);
//         console.log(error);
//     }

//     console.log(dogList.message);

//     dogList.forEach(cur => {
//         console.log(cur);
//     })
// })

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
        <select >
            <option>Choose a dog breed</option>
            ${Object.keys(breedList).map(breed => {
                return `<option>${breed}</option>`
            })}
        </select>
    `
};

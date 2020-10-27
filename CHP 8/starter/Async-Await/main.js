async function loadUsers() {
    return (await (await fetch("users.json")).json())

    // const response =  await fetch("users.json")
    // const users = await response.json();
    // return users;
}

document.addEventListener("DOMContentLoaded", async () => {
    let users = [];

    try {
        users = await loadUsers();
        
    } catch (e) {
        console.log("We fucked up!");
        console.log(e);
    }

    const ageChecker = el => {
        if(el >= 25) {
            return 'a leader';
        } else {
            return 'a follower';
        }
    }
    console.log(`There are ${users.length} users on the platform.`);
        
    users.forEach(cur => {
        console.log(`${cur.username} is ${cur.age} years old. This person is ${ageChecker(cur.age)}.`);
    });
    //console.log(users);
})
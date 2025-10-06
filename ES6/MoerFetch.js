fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showUser(data)
    })

const showUser = users => {
    console.log(users);
    users.forEach(user => console.log(user));
}

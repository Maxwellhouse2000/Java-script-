const users = [
	{ id: 1, name: 'Zafar', position: 'Teacher' },
	{ id: 2, name: 'Ildar', position: 'Teacher' },
	{ id: 3, name: 'RAfael', position: 'Teacher' },
	{ id: 4, name: 'Mihail', position: 'Programmer' },
]

function getUsers() {
    setTimeout(() => {
        let output = '';
        users.forEach((user) => {
            output += `<li>Имя: ${user.name}  Должность: ${user.position}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function addUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user);
            // resolve();
            // reject('Ошибка добавления пользователя');
            
        }, 2000);
    });
}
addUser({ id: 4, name: 'Mihail', position: 'Programmer' })
    // .then(() => getUsers())
    // .then(() => alert('Вы добавили пользователя'))
    .catch((err) => console.error(err));




console.log(users.pop()) 
 users.pop()
console.log(users)

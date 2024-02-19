const users = [
	{ id: 1, name: 'Zafar', position: 'Teacher' },
	{ id: 2, name: 'Ildar', position: 'Teacher' },
	{ id: 3, name: 'RAfael', position: 'Teacher' },
]

function getUsers() {
	setTimeout(() => {
		let output = ''
		users.forEach(user => {
			output += `<li>Имя: ${user.name}  Должность: ${user.position}</li>`
		})
		document.body.innerHTML = output
	}, 1000)
}

function addUser(user, callback) {
	setTimeout(() => {
		users.push(user)
		
         console.log(users.pop())
		callback()
	}, 2000)
	console.log(users)
}
addUser({ id: 4, name: 'Mihail', position: 'Programmer' }, getUsers)

// pop();




const users = [
    { id: 1, name: 'Иван', isAdmin: false },
    { id: 2, name: 'Анна', isAdmin: true },
    { id: 3, name: 'Петр', isAdmin: false },
    { id: 4, name: 'Ольга', isAdmin: true },
]

const userNames = users.map(user => user.name)
console.log(userNames)

const adminUsers = users.filter(user => user.isAdmin)
console.log(adminUsers)

const userWithId3 = users.find(user => user.id === 3)
console.log(userWithId3)
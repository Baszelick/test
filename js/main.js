async function fetchAndRenderUsers() {
    try {
    const usersContainer = document.getElementById('users-container');
    usersContainer.textContent = 'Загрузка...';
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
        throw new Error('Ошибка при загрузке пользователей');
    }
        const users = await response.json();
    usersContainer.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('div');
        const name = document.createElement('h2');
        const email = document.createElement('p');
        const city = document.createElement('p');

        card.classList.add('user-card');

        name.textContent = user.name;
        email.textContent = `Email: ${user.email}`
        city.textContent = `Город: ${user.address.city}`

        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(city);

        usersContainer.appendChild(card);
    })

    } catch (error) {
        document.getElementById('users-container').textContent = `Ошибка: ${error.message}`;
    }

}
fetchAndRenderUsers()
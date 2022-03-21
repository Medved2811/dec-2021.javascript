

let usersCont = document.getElementsByClassName('users') [0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const userItem of value) {
        let userCont = document.createElement('div')
            userCont.classList.add('user')
           let content = document.createElement('a');
            content.innerText = `${userItem.id} - ${userItem.name}`;
            content.href = `./user-details.html?data=${JSON.stringify(userItem)}`;
            userCont.appendChild(content);
            usersCont.appendChild(userCont);
        }
});
function SetUsername(username) {
    return ({ type: 'setUSER', username: `${username}` });
}

function SetPassword(password) {
    return ({ type: 'setPASS', password: `${password}` });
}

function addUser(user) {
    return ({ type: 'addUSER', user: user});
}

export { SetUsername, SetPassword, addUser };
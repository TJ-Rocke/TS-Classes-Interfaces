"use strict";
// HOW TO USE AN INTERFACE BELOW
let user;
user = {
    email: "test@example.com",
    password: "abc1",
    login() {
        // reach out to database
        // check credentials
        // create a session
    },
    logout() {
        // clear the session
        // etc...
    },
};

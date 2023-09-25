import * as c from './constantans';

export const names = new Array().fill(null);
export const emails = new Array().fill(null);
export const passwords = new Array().fill(null);

export function loginBtn() {
  c.loginBtn.addEventListener('click', () => {
    // c.navbar.style.display = 'none';
    c.main.style.display = 'none';
    c.login.style.display = 'block';
  });
}

export function registerBtn() {
  c.registerBtn.addEventListener('click', () => {
    // c.navbar.style.display = 'none';
    c.main.style.display = 'none';
    c.register.style.display = 'block';
  });
}

export function submit() {
  c.submit.addEventListener('click', () => {
    c.register.style.display = 'none';
    c.login.style.display = 'block';
    names.push(c.inpRegUserName.value);
    emails.push(c.inpRegEmail.value);
    passwords.push(c.inpRegPassword.value);
    console.log(names);
    console.log(emails);
    console.log(passwords);
  });
}

export function logIn() {
  c.singIn.addEventListener('click', () => {
    c.login.style.display = 'none';
    c.navbar.style.display = 'block';
    c.main.style.display = 'block';
    c.registerBtn.style.display = 'none';
    c.nav_link_logout.style.display = 'block';
    c.loginBtn.innerText = `${c.inpRegUserName.value}`;
  });
}

//
/**
 *
 *
 *
 *
 *
 */

// User class representing a user object
// export class User {
//   constructor(public username: string, public password: string) {}
// }

// // User database
// const users: User[] = [];

// // Register function to create a new user
// function register(username: string, password: string): void {
//   const newUser = new User(username, password);
//   users.push(newUser);
//   console.log('User registered successfully!');
// }
// // Login function to authenticate user
// function login(username: string, password: string): boolean {
//   const user = users.find(user => user.username === username && user.password === password);
//   if (user) {
//     console.log('Login successful!');
//     return true;
//   } else {
//     console.log('Invalid credentials. Please try again.');
//     return false;
//   }
// }

// // Usage example
// register(c.inpRegUserName.value, c.inpRegPassword.value);
// login(c.inpRegUserName.value, c.inpRegPassword.value);

/**
 *
 *
 */

//interface User {
//   username: string;
//   password: string;
// }

// const users: User[] = [];

// function register(username: string, password: string): void {
//   const existingUser = users.find(user => user.username === username);
//   if (existingUser) {
//     console.log('Bu foydalanuvchi nomi allaqachon olingan');
//     return;
//   }

//   const newUser: User = {
//     username,
//     password
//   };
//   users.push(newUser);
//   console.log("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tkazildi");
// }

// function login(username: string, password: string): void {
//   const user = users.find(user => user.username === username);
//   if (!user) {
//     console.log('Foydalanuvchi topilmadi');
//     return;
//   }

//   if (user.password !== password) {
//     console.log("Noto'g'ri parol");
//     return;
//   }

//   console.log('Kirish muvaffaqiyatli amalga oshirildi');
// }

// // Misol uchun ro'yxatdan o'tish va kirishni sinab ko'ramiz
// register('user1', 'password1');
// register('user2', 'password2');
// login('user1', 'password1');
// login('user2', 'password1');
// login('user3', 'password3');

/**
 *
 *
 */

// const userName = emails.find(user => user.username === user);
// const user = emails.find(user => user.username === userName);
// if (!user) throw new Error(`UserName not found ${user}`);
// console.log(`[user] =`, user);

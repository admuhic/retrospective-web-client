import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  
};

var app = initializeApp(firebaseConfig);
var auth = getAuth(app);

/**
 * Register a new user using an email and a password
 * @param {*} email
 * @param {*} password
 * @returns A new user or an error
 */
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Sign in a user using an email and a password
 * @param {*} email
 * @param {*} password
 * @returns A new user or an error
 */
export function signInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}

/**
 * Sign out an user
 */
export function signOutUser() {
  auth
    .signOut()
    .then(() => {
      console.log("Signed out");
      this.$router.push("/sign-in");
    })
    .catch((error) => console.log(error));
}

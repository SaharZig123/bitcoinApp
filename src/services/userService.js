import { storageService } from "./storageService";

export const userService = {
  getUser,
  signup,
  addMove,
};

const STORAGE_KEY = "loggedInUser";

function getUser() {
  const user = storageService.load(STORAGE_KEY);
  return user;
}

function signup(username) {
  const newUser = {
    username: username,
    coins: 5000,
    moves: [],
  };
  storageService.store(STORAGE_KEY, newUser);
}

function addMove(amount, contact) {
  const user = storageService.load(STORAGE_KEY);
  user.moves.unshift({
    to: contact,
    at: new Date().toLocaleString(),
    amount,
  });
  user.coins -= amount;
  storageService.store(STORAGE_KEY, user);
}

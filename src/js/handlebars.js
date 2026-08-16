import Handlebars from "handlebars";
import bookmarksTemplate from "bundle-text:../templates/bookmark-list.hbs";

import * as storage from "../helpers/storage.js";

const STORAGE_BOOKMARK_KEY = "bookmarks";
const container = document.querySelector(".container");
const input = document.querySelector("#bookmarkInput");
const button = document.querySelector("#addBookmarkBtn");
const list = document.querySelector("#bookmarkList");
const linkList = storage.load(STORAGE_BOOKMARK_KEY) || [];

// const btnDelete = document.querySelector("#bookmarks-delete");
// const btnEdit = document.querySelector("#bookmarks-edit");

const createBookmarkMarkup = Handlebars.compile(bookmarksTemplate);

// console.log(bookmarkMarkup);
function renderBookmark() {
  const bookmarkMarkup = createBookmarkMarkup(linkList);
  list.innerHTML = bookmarkMarkup;
}

//push
function pushBookmark() {
  const url = input.value.trim();
  if (!url) {
    alert("Будь ласка не залишайте input порожній та введіть свою закладку");
    return;
  }
  linkList.push(url);
  storage.save(STORAGE_BOOKMARK_KEY, linkList);
  renderBookmark();
  input.value = "";
}

button.addEventListener("click", pushBookmark);

//localStorage

//edit and delete
container.addEventListener("click", (event) => {
  const btnDelete = event.target.closest("#bookmarks-delete");
  const btnEdit = event.target.closest("#bookmarks-edit");

  if (btnDelete) {
    const index = event.target.dataset.index;

    linkList.splice(index, 1);
    storage.save(STORAGE_BOOKMARK_KEY, linkList);
    renderBookmark();
  }

  if (btnEdit) {
    const index = event.target.dataset.index;
    input.value = bookmarks[index];
    linkList.splice(index, 1);
    renderBookmark();
  }
});
renderBookmark();
//delete
// function deleteBookmark(event) {
//   const index = event.target.dataset.index;

//   bookmarks.splice(index, 1);
//   renderBookmark();
// }

// btnDelete.addEventListener("click", deleteBookmark);

// //edit
// function editBookmark(event) {
//   const index = event.target.dataset.index;
//   input.value = bookmarks[index];
//   deleteBookmark();
// }

// btnEdit.addEventListener("click", editBookmark);

// =========================================================================================

//second task

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

const STORAGE_INPUTS_KEY = "inputs";
const infoList = storage.load(STORAGE_INPUTS_KEY) || {};

username.value = infoList.username || "";
password.value = infoList.password || "";

function savingInfo(event) {
  if (username) {
    const usernameTarget = username.value;
    console.log(usernameTarget);
    infoList.username = usernameTarget;
  }

  if (password) {
    const passwordTarget = password.value;
    console.log(passwordTarget);
    infoList.password = passwordTarget;
  }
  storage.save(STORAGE_INPUTS_KEY, infoList);
}

saveBtn.addEventListener("click", savingInfo);

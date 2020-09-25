import itemTemplates from "../templates/gallery-items.hbs";
import menu from "../menu.json";

const markup = itemTemplates(menu);

const menuItemsRef = document.querySelector(".js-menu");

menuItemsRef.insertAdjacentHTML("beforeend", markup);

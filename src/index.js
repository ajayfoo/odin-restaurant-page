import { getNewHomeContent } from "./homeSetup";
import { getNewMenuContent } from "./menuSetup";
import { getNewContactContent } from "./contactSetup";
import { getNewAboutContent } from "./aboutSetup";

const navBar = document.querySelector('body>header>nav');
const content = document.getElementById('content');
const homeContent = getNewHomeContent();
const menuContent = getNewMenuContent();
const contactContent = getNewContactContent();
const aboutContent = getNewAboutContent();

const getContentFor = (tabText) => {
    switch (tabText.toLowerCase()) {
        case 'menu': return menuContent;
        case 'contact': return contactContent;
        case 'about': return aboutContent;
        default: return homeContent;
    }
};

const setupEventListenersForTabs = () => {
    for (const btn of navBar.children) {
        btn.addEventListener('click', () => {
            const newContentItem = getContentFor(btn.textContent);
            content.replaceChildren(newContentItem);
        });
    }
}

content.replaceChildren(homeContent);
setupEventListenersForTabs();
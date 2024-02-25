import { getNewHomeContent } from "./homeSetup";
const content = document.getElementById('content');
const newHomeContent = getNewHomeContent();

content.appendChild(newHomeContent);
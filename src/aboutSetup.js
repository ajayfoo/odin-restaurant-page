const getNewAboutContent = () => {
    const aboutContent = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'About';
    const p = document.createElement('p');
    p.textContent = 'This is the about page';
    aboutContent.append(h1, p);
    return aboutContent;
};

export { getNewAboutContent };
const getNewMenuContent = () => {
    const menuContent = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    const p = document.createElement('p');
    p.textContent = 'This is the menu page';
    menuContent.append(h1, p);
    return menuContent;
};

export { getNewMenuContent };
const getNewContactContent = () => {
    const contactContent = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    const p = document.createElement('p');
    p.textContent = 'This is the contact page';
    contactContent.append(h1, p);
    return contactContent;
};

export { getNewContactContent };
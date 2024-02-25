const content = document.getElementById('content');
const setup = () => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Magnificent Restaurant';
    const img = document.createElement('img');
    img.src = "images/hero.jpg";
    img.alt = "interior of the restaurant";
    const h2 = document.createElement('h2');
    h2.textContent = "What's special about us?"
    const p = document.createElement('p');
    p.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente praesentium reprehenderit ab quo
            perspiciatis deleniti earum ratione! Recusandae hic reiciendis accusantium consequuntur, repellendus
            obcaecati possimus cumque praesentium sequi modi velit asperiores eligendi odit ullam.`;
    content.append(h1, img, h2, p);
};

export { setup };
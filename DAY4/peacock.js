document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.style.fontFamily = 'sans-serif';
    container.style.fontSize = '18px';
    container.style.margin = '12px';

    const text = document.createElement('span');
    text.id = 'peacockText';
    text.textContent = 'peacock';

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Click';
    button.style.marginLeft = '8px';

    button.addEventListener('click', () => {
        text.textContent = 'peacock is a national bird';
    });

    container.appendChild(text);
    container.appendChild(button);
    document.body.appendChild(container);
});
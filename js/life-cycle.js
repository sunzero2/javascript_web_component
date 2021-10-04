class Square extends HTMLElement {
    static get observedAttributes() {
        return ['c', 'l'];
    }

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const section = document.createElement('section');
        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(section);
        shadow.appendChild(style);
        section.appendChild(div);
    }

    connectedCallback() {
        console.log('Custom square element add to page.');
        updateStyle(this);
        update.disabled = false;
        remove.disabled = false;
        add.disabled = true;
    }

    disconnectedCallback() {
        console.log('Custom square element remove from page.');
        update.disabled = true;
        remove.disabled = true;
        add.disabled = false;
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom sqaure element attributes changed.');
        updateStyle(this);
    }
}

customElements.define('custom-square', Square);

const updateStyle = elem => {
    const shadow = elem.shadowRoot;
    shadow.querySelector('style').textContent = `
    

    div {
        width: ${elem.getAttribute('l')}px;
        height: ${elem.getAttribute('l')}px;
        background-color: ${elem.getAttribute('c')};
    }
    `;
}

const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');
let square;

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

add.onclick = () => {
    square = document.createElement('custom-square');
    square.setAttribute('l', '100');
    square.setAttribute('c', 'red');
    document.body.appendChild(square);
}

update.onclick = () => {
    square.setAttribute('l', random(50, 200));
    square.setAttribute('c', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
}

remove.onclick = () => {
    document.body.removeChild(square);
}
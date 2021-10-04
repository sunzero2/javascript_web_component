class PopupInfo extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('popup-info');
        const templateContent = template.content;
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.append(templateContent.cloneNode(true));
    }
}

customElements.define('popup-info', PopupInfo);
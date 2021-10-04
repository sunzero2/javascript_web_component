class PopupInfo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const title = document.createElement('h1');
        const content = document.createElement('p');
        const h1 = document.createElement('h1');

        title.innerHTML = '제목';
        content.innerHTML = '내용';
        h1.innerHTML = '나올까요?';

        shadow.append(title);
        shadow.append(content);
        this.append(h1);
    }
}

customElements.define('popup-info', PopupInfo);
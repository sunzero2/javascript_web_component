// HTMLParagraphElement : <p> 태그를 조작하기 위한 특수 속성. HTMLElement를 상속함
class WordCount extends HTMLParagraphElement {
    constructor() {
        // constructor 내에서 항상 첫 번째로 호출해야 함.
        super();

        const wcParent = this.parentNode;
        const count = `Words: ${this.countWords(wcParent)}`;

        // Shadow Root : Read-only
        const shadow = this.attachShadow({ mode: 'open' });

        const text = document.createElement('span');
        text.textContent = count;

        shadow.appendChild(text);

        setInterval(() => {
            const count = `Words: ${this.countWords(wcParent)}`;
            text.textContent = count;
        }, 200);
    }

    countWords(node) {
        const text = node.innerText || node.textContent;
        return text.split(/\s+/g).length;
    }
}

// customElements.define('word-count', WordCount);
customElements.define('word-count', WordCount, { extends: 'p' });
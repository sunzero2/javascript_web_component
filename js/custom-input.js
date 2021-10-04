class CustomInput extends HTMLElement {
    constructor() {
        super();
    }

    // connectedCallback() : 사용자 정의 요소가 문서 연결 요소에 추가될 때마다 실행
    connectedCallback() {
        this.render();
    }

    // name attribute가 바뀌는지 검사
    static get observedAttributes() {
        return ['name'];
    }

    // attributeChangeCallback() : 사용자 정의 요소의 속성 중 하나가 추가/제거/변경될 때마다 실행
    attributeChangeCallback() {
        this.render();
    }

    render() {
        let label = document.createElement('label');
        label.innerHTML = '라벨';
        this.appendChild(label);
        let input = document.createElement('input');
        this.appendChild(input);
    }
}

// CustomElementRegistry: 사용자 정의 요소 등록 / 조회
// define(): 새 사용자 정의 요소 등록
customElements.define('custom-input', CustomInput);
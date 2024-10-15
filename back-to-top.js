class BackToTop extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                #backToTop {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: #007bff;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                    display: none;
                    z-index: 1000;
                }
            </style>
            <div id="backToTop">Back to Top</div>
        `;
        this.button = this.shadowRoot.querySelector('#backToTop');
        this.button.addEventListener('click', this.scrollToTop.bind(this));
        window.addEventListener('scroll', this.toggleVisibility.bind(this));
    }

    toggleVisibility() {
        if (window.scrollY > 200) {
            this.button.style.display = 'block';
        } else {
            this.button.style.display = 'none';
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

customElements.define('back-to-top', BackToTop);

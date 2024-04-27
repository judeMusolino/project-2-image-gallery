import { LitElement, html, css } from 'lit'; 

export class MediaImage extends LitElement {

    static get tag() {
        return 'media-image'; 
    }

    constructor() {
        super(); 
        this.source = ""; 
    }

    handleClick() {
        console.log("Image Opened"); 

        const event = new CustomEvent("image-opened", {
            bubbles: true, 
            composed: true, 
            cancelable: true, 
            detail: {
                opened: true,
            },
        })
        this.dispatchEvent(event); 
    }

    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: inline-flex; 
                }
            ` 
        ];
    }

    render() {
        return html`
            <div class="wrapper" @click="${this.handleClick}">
                <img class="image" src="${this.source}">
            </div>
        `;
    }

    static get properties() {
        return {
            ...super.properties,
                source: { type: String, reflect: true },
        };
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage); 
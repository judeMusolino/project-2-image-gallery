import { html, css } from 'lit'; 
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class MediaImage extends DDD {

    static get tag() {
        return 'media-image'; 
    }

    constructor() {
        super(); 
        this.source = ""; 
        this.caption = ""; 
        this.description = ""; 
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

                .wrapper {
                    background-color: var(--ddd-theme-default-white); 
                    padding: var(--ddd-spacing-2); 
                    transition: transform 250ms ease-in-out; 
                }

                .wrapper:hover {
                    box-shadow: 0px 0px 16px var(--ddd-theme-default-wonderPurple);
                    transform: scale(1.05); 
                    cursor: pointer; 
                }

                .image {
                    width: 400px;  
                }

                .caption {
                    font-size: 16px; 
                    color: var(--ddd-theme-default-wonderPurple); 
                    padding: var(--ddd-spacing-2); 
                }

                .description {
                    display: none; 
                }

                
            `];
    }

    render() {
        return html`
            <div class="wrapper" @click="${this.handleClick}">
                <div class="container">
                <img class="image" src="${this.source}">
                <div class="caption">${this.caption}</div>
                <div class="description">${this.description}</div>
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            ...super.properties,
                source: { type: String, reflect: true },
                caption: { type: String, reflect: true },
                description: { type: String, reflect: true },
        };
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage); 
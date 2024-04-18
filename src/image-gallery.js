
import { LitElement, html, css } from 'lit';

export class ImageGallery extends LitElement {
  
  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.expandedimg = ''; 
    this.imagetext = ''; 
    this.opened = false; 
  }

  static get styles() {
    return css`
    .column {
        float: left;
        width: 200px;
        padding: 10px;
    }

    .column img {
      opacity: 0.8;
      cursor: pointer;
      width: 200px; 
    }

    .column img:hover {
      opacity: 1;
    }

    .container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: inline-block;
      padding: 100px 0; 
      justify-content: center;
      vertical-align: middle; 
      text-align: center; 
      z-index: 999;
    }

    .imgtext {
      font-size: 16px;
      color: white; 
    }

    .bigimage {
      max-width: 90%;
      max-height: 90%;
    }

    .closebtn {
      position: absolute;
      top: 10px;
      right: 16px;
      color: white;
      font-size: 36px;
      cursor: pointer;
    }

    .moveLeft{
      font-size: 36px;
      color: white; 
      position: absolute; 
      left: 16px; 
    }

    .moveRight{
      font-size: 36px;
      color: white; 
      position: absolute; 
      right: 16px; 
    }

    `;
  }

  expandImage(e) {    
    this.opened = true; 
    const smallImage = e.target;
    this.expandedimg = smallImage.src;
    this.imagetext = smallImage.alt;
  }

  minimize() {
    this.expandedimg = '';
    this.imagetext = '';
    this.opened = false; 
  }
  
  render() {
    return html`
    <div class="row">
        <div class="column" @click="${this.expandImage}">
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Snow">
        </div>
        <div class="column" @click="${this.expandImage}">
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Mountains">
        </div>
        <div class="column" @click="${this.expandImage}">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Lights">
        </div>
    </div>

    ${!this.opened ? '' : html`
    <div class="container">
      <span @click="${this.minimize}" class="closebtn">x</span>
      <div class="moveLeft" @click="${this.slideleft}"><</div>
      <div class="moveRight" @click="${this.slideright}">></div>
      <img class="bigimage" src="${this.expandedimg}">
      <p class="imgtext">${this.imagetext}</p>
    </div>`}
    
    `;
  }

  static get properties() {
    return {
        expandedimg : { type: String },
        imagetext : { type: String },
        opened : { type: Boolean },
    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);

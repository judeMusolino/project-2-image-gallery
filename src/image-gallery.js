
import { LitElement, html, css } from 'lit';

export class ImageGallery extends LitElement {
  
  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.expandedimg = ''; 
    this.imagetext = ''; 
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

    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }

    .bigimage {
        max-width: 90%;
        max-height: 90%;
    }

    .closebtn {
        position: absolute;
        top: 10px;
        right: 15px;
        color: white;
        font-size: 35px;
        cursor: pointer;
    }
    `;
  }

  expandImage(e) {
    const smallImage = e.target;
    this.expandedimg = smallImage.src;
    this.imagetext = smallImage.alt;
  }

  minimize() {
    this.expandedimg = '';
    this.imagetext = '';
  }
  
  render() {
   
    return html`
    <div class="row">
        <div class="column" onclick="${this.expandImage}">
            <img class="littleimage" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Snow">
        </div>
        <div class="column">
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Mountains" onclick="${this.expandImage}">
        </div>
        <div class="column" onclick="${this.expandImage}">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Lights">
        </div>
    </div>

    ${this.expandedimg ? html`
    <div class="container">
      <span @click="${this.minimize}" class="closebtn">x</span>
      <img class="bigimage" src="${this.expandedimg}">
      <div class="imgtext">${this.imagetext}</div>
    </div>` : ''}
    
    `;
  }

  static get properties() {
    return {
        expandedimg : { type: String },
        imagetext : { type: String },
    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);


import { LitElement, html, css } from 'lit';

export class ImageGallery extends LitElement {
  
  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.image = []; 
    this.imageNumber = 1;
    this.totalImages = 3; 
    this.opened = false; 
  }

  static get styles() {
    return css`
    :host {
      display: none
    }

    :host([opened]) {
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

  minimize() {
    this.opened = false; 
  }

  firstUpdated(){
    var data = document.querySelectorAll('media-image'); 
    data.forEach(image => {
      this.image.push(image.getAttribute('source')); 
    })

    console.log(this.image); 

    document.addEventListener('image-opened', (e) => {
      var url = e.target.attributes.source.nodeValue; 
      this.imageNumber = this.image.indexOf(url) + 1;
      this.opened = true; 
    })
  }

  slideleft() {
    if (this.imageNumber > 1) {
      this.imageNumber = this.imageNumber-1; 
    }
    else {
      this.imageNumber = this.totalImages; 
    } 
    this.requestUpdate(); 
  }

  slideleft() {
    if (this.imageNumber < this.totalImages) {
      this.imageNumber = this.imageNumber+1; 
    }
    else {
      this.imageNumber = 1; 
    } 
    this.requestUpdate(); 
  }
  
  render() {
    return (!this.opened) ? html`` : html`
    <div class="container">
      <div class="currentImage">${this.imageNumber}</div>
      <div> of </div>
      <div class="totalImage">${this.totalImages}</div>
      
      <span @click="${this.minimize}" class="closebtn">x</span>
      <span class="moveLeft" @click="${this.slideleft}"><</span>
      <span class="moveRight" @click="${this.slideright}">></span>
      <img id="image" src="${this.image[this.imageNumber-1]}" alt="Mountains">
    </div>
    
    `;
  }

  static get properties() {
    return {
        image : { type: Array },
        imageNumber : { type: Number },
        totalImages : { type: Number },
        opened : { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);

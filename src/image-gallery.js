
import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallery extends DDD {
  
  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.image = []; 
    this.captions = []; 
    this.descriptions = []; 
    this.imageNumber = 1;
    this.totalImages = 4; 
    this.opened = false; 
    
  }

  static get styles() {
    return [
    super.styles,
    css`
    :host {
      display: none
    }

    :host([opened]) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: inline-block;
      padding: 100px 0; 
      justify-content: center;
      vertical-align: middle; 
      text-align: center; 
      z-index: 999; 
    }

    .closebtn {
      position: absolute;
      top: var(--ddd-spacing-4);
      right: var(--ddd-spacing-8);
      color: white;
      font-size: 36px;
      cursor: pointer;
    }

    .slidecontainer {
      margin: auto; 
      width: 600px;  
      padding: var(--ddd-spacing-4); 
    }
    .currentImage, .of, .totalImage {
      font-size: 18px; 
      color: white; 
      padding: var(--ddd-spacing-8); 
      padding-bottom: 100px; 
      display: inline-block; 
      vertical-align: middle; 
    }

    .moveLeft{
      font-size: 36px;
      color: white; 
      position: absolute; 
      left: var(--ddd-spacing-8); 
    }

    .moveRight{
      font-size: 36px;
      color: white; 
      position: absolute; 
      right: var(--ddd-spacing-8); 
    }

    .moveLeft:hover, .moveRight:hover, .closebtn:hover {
      cursor: pointer; 
      color: var(--ddd-theme-default-athertonViolet); 
    }
    
    .details{
      font-size: 16px; 
      color: white;
      padding: 100px;  
    }

    #image {
      transform: scale(1.5); 
      padding: 4px;  
    }
    `];
  }

  minimize() {
    this.opened = false; 
  }

  firstUpdated(){
    var data = document.querySelectorAll('media-image'); 
    data.forEach(image => {
      this.image.push(image.getAttribute('source')); 
      this.captions.push(image.getAttribute('caption')); 
      this.descriptions.push(image.getAttribute('description')); 
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

  slideright() {
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
    <script type="module" src="./src/media-image.js"></script>
    
    <div class="container">
      <div class="slidecontainer">
        <div class="currentImage">${this.imageNumber}</div>
        <div class="of"> of </div>
        <div class="totalImage">${this.totalImages}</div>
      </div>

      <span @click="${this.minimize}" class="closebtn">x</span>
      <span class="moveLeft" @click="${this.slideleft}"><</span>
      <span class="moveRight" @click="${this.slideright}">></span>
      <media-image id="image" source="${this.image[this.imageNumber-1]}" caption="${this.captions[this.imageNumber-1]}" description="${this.descriptions[this.imageNumber-1]}"></media-image>
      <div class="details">${this.descriptions[this.imageNumber-1]}</div>
    </div>
    `;
  }

  static get properties() {
    return {
      ...super.properties,
      image : { type: Array },
      captions : { type: Array },
      descriptions : { type: Array },
      imageNumber : { type: Number },
      totalImages : { type: Number },
      opened : { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);


import { LitElement, html, css } from 'lit';

export class ImageGallery extends LitElement {
  
  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.expandedimg = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"; 
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
        position: relative;
        display: block;
    }


    #imgtext {
        position: absolute;
        bottom: 15px;
        left: 15px;
        color: white;
        font-size: 20px;
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
    var bigImg = document.getElementById("bigimage");
    var imgText = document.getElementById("imgtext");
    bigImg.src = e.src;
    imgText.innerHTML = e.alt;
    expandImg.parentElement.style.display = "block";
  }
  
  render() {
   
    return html`
    <div class="row">
        <div class="column">
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Snow" onclick="${this.expandImage}">
        </div>
        <div class="column">
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Mountains" onclick="${this.expandImage}">
        </div>
        <div class="column">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Lights" onclick="${this.expandImage}">
        </div>
    </div>

    <div class="container">
        <span onclick="${this.parentElement.minimize}" class="closebtn">x</span>
        <img class = "bigimage" src="${this.expandedimg}" style="width:100%">
        <div class="imgtext"></div>
    </div>
    `;
  }

  static get properties() {
    return {
        
    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);

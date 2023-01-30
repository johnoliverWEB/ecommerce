import { API_URL } from '../config/config.js';

class UploadImageButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.name = this.getAttribute('name');
        this.languageAlias = this.getAttribute('languageAlias') || "es";
        this.quantity = this.getAttribute('quantity') || "single";
    }

    connectedCallback() {
    
        document.addEventListener('imageSelected', event => {
            this.createThumbnail(event.detail.images);
        });

        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .square-button {
                width: 135px;
                height: 135px;
                border: none;
                background-color: hsl(207, 85%, 69%);
                color: white;
                text-align: center;
                display: inline-block;
                font-size: 16px;
                cursor: pointer;
            }

            .square-button:hover {
                border: 0.2rem solid hsl(19, 100%, 50%);
                cursor: pointer;
            }
          
            .icon {
                fill: white;
                width: 24px;
                height: 24px;
            }

            .upload-image-container {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: left;
            }

            .upload-image{
                background-color: hsl(100, 100%, 100%);
                cursor: pointer;
                height: 135px;
                position: relative;
                width: 135px;
            }

            .delete-button {
                position: absolute;
                top: 0.2rem;
                right: 0.2rem;
                background-color: hsl(0, 100%, 50%);
                color: white;
                border: none;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                font-size: 12px;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .upload-image:hover .delete-button {
                opacity: 1;
            }

            .delete-button:hover {
                background-color: hsl(0, 100%, 30%);
            }
        </style>

        <div class="upload-image-container">
            <button class="square-button">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
            </button>
        </div>
        `;	

        this.shadow.querySelector('.square-button').addEventListener('click', () => {

            document.dispatchEvent(new CustomEvent('openGallery', { 
                detail: {
                    name: this.name,
                    languageAlias: this.languageAlias 
                }
            }));
        });
    }

    createThumbnail(images) {
        
        if (images.name === this.name) {

            if(this.quantity === "single"){
                this.shadow.querySelector('.upload-image-container').innerHTML = "";
            }

            images.files.forEach(file => {

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('upload-image');

                let image = document.createElement("img");
                image.src = `${API_URL}/api/admin/image-gallery/${file.filename}`;

                let deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button');
                deleteButton.innerHTML = "X";

                imageContainer.appendChild(deleteButton);
                imageContainer.appendChild(image);
                this.shadow.querySelector('.upload-image-container').appendChild(imageContainer);

                imageContainer.addEventListener('click', () => {

                    this.shadow.querySelector('.upload-image').addEventListener('click', () => {

                        document.dispatchEvent(new CustomEvent('uploadImage', { 
                            detail: {
                                name: this.name,
                                languageAlias: this.languageAlias 
                            }
                        }));
                    });
                });
            });
        }
    }
}

customElements.define('upload-image-button-component', UploadImageButton);

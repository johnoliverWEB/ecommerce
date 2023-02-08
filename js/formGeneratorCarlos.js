// const form = this.shadow.querySelector('form');
//         const tabsContainerItems = this.shadow.querySelector('.tabs-container-items ul'); 
//         const tabsContainerContent = this.shadow.querySelector('.tabs-container-content'); 

//         for(let tab in this.formStructure.tabs) {

//             const tabElement = document.createElement('li');
//             tabElement.classList.add('tab-item');            
//             tabElement.dataset.tab = tab;
//             tabElement.innerHTML = this.formStructure.tabs[tab].label;
//             tabsContainerItems.append(tabElement);

//             const tabPanel = document.createElement('div');
//             tabPanel.dataset.tab = tab;
//             tabPanel.classList.add('tab-panel');
//             tabsContainerContent.append(tabPanel);

//             for (let row in this.formStructure.tabsContent[tab].rows) {

//                 const tabPanelRow = document.createElement('div');
//                 tabPanelRow.classList.add('row');

//                 for(let field in this.formStructure.tabsContent[tab].rows[row].formElements) {

//                     let formElement = this.formStructure.tabsContent[tab].rows[row].formElements[field];

//                     const formElementContainer = document.createElement('div');
//                     const formElementLabel = document.createElement('div');
//                     const formElementInput = document.createElement('div');
//                     formElementContainer.append(formElementLabel);
//                     formElementContainer.append(formElementInput);
        
//                     formElementContainer.classList.add('form-element');
//                     formElementLabel.classList.add('form-element-label');
//                     formElementInput.classList.add('form-element-input');
        
//                     if(formElement.label){
//                         const label = document.createElement('label');
//                         label.innerText = formElement.label;
//                         label.setAttribute('for', field);
//                         formElementLabel.append(label);
//                     }
     
//                     if (formElement.element === 'input') {
        
//                         switch (formElement.type) {

//                             case 'hidden': {

//                                 const input = document.createElement('input');
//                                 input.type = formElement.type;
//                                 input.name = field;
//                                 input.value = formElement.value || '';

//                                 form.append(input);

//                                 continue;
//                             }

//                             case 'checkbox':
//                             case 'radio': {
        
//                                 const inputContainer = document.createElement('div');
//                                 inputContainer.classList.add(`${formElement.type}-container`);
                
//                                 formElement.options.forEach(option => {
//                                     const input = document.createElement('input');
//                                     const inputLabel = document.createElement('label');
//                                     inputLabel.innerText = option.label;
//                                     input.id = field;
//                                     input.type = formElement.type;
//                                     input.name = field;
//                                     input.value = option.value || '';
//                                     input.checked = option.checked || false;
//                                     input.disabled = option.disabled || false;

//                                     inputContainer.append(inputLabel);
//                                     inputContainer.append(input);
//                                 });

//                                 formElementInput.append(inputContainer);

//                                 break;
//                             }

//                             case 'range': {

//                                 const rangeContainer = document.createElement('div');
//                                 rangeContainer.classList.add('range-container');
                
//                                 const input = document.createElement('input');
//                                 input.id = field;
//                                 input.type = formElement.type;
//                                 input.name = field;
//                                 input.min = formElement.min || '';
//                                 input.max = formElement.max || '';
//                                 input.step = formElement.step || '';
//                                 input.value = formElement.value || '';
//                                 rangeContainer.append(input);

//                                 const rangeValue = document.createElement('span');
//                                 rangeValue.classList.add('range-value');
//                                 rangeValue.innerText = formElement.value;
//                                 rangeContainer.append(rangeValue);

//                                 input.addEventListener('input', () => {
//                                     rangeValue.innerText = input.value;
//                                 });

//                                 formElementInput.append(rangeContainer);

//                                 break;
//                             }

//                             case 'number':
//                             case 'date':
//                             case 'time':
//                             case 'datetime-local':
//                             case 'month':
//                             case 'week': {
//                                 const input = document.createElement('input');
//                                 input.id = field;
//                                 input.type = formElement.type;
//                                 input.name = field;
//                                 input.min = formElement.min || '';
//                                 input.max = formElement.max || '';
//                                 input.step = formElement.step || '';
//                                 input.placeholder = formElement.placeholder || '';
//                                 input.value = formElement.value || '';
//                                 input.readOnly = formElement.readOnly || false;
//                                 input.dataset.validate = formElement.validate || '';

//                                 formElementInput.append(input);
                            
//                                 break;
//                             }

//                             case 'file': {

//                                 if(!this.shadow.querySelector('image-gallery-component')){
//                                     const imageGallery = document.createElement('image-gallery-component');
//                                     this.shadow.append(imageGallery);
//                                 }

//                                 const input = document.createElement('upload-image-button-component');
//                                 input.id = field;
//                                 input.setAttribute("name", field);
//                                 input.setAttribute("languageAlias", "es");
//                                 input.setAttribute("quantity", formElement.quantity);

//                                 // input.accept = formElement.accept || '';
//                                 // input.multiple = formElement.multiple || false;
//                                 // input.required = formElement.required || false;
//                                 // input.dataset.validate = formElement.validate || '';

//                                 formElementInput.append(input);

//                                 break;
//                             }

//                             default: {
                                
//                                 const input = document.createElement('input');
//                                 input.id = field;
//                                 input.type = formElement.type;
//                                 input.name = field;
//                                 input.value = formElement.value || '';
//                                 input.placeholder = formElement.placeholder || '';
//                                 input.dataset.validate = formElement.validate || '';
                                  
//                                 if(formElement.maxLength){

//                                     input.maxLength = formElement.maxLength || '';
//                                     const counter = document.createElement('span');
//                                     formElementLabel.append(counter);

//                                     input.addEventListener('input', () => {
//                                         if(input.value.length > 0){
//                                             counter.textContent = input.value.length + ' / ' + input.maxLength;                            
//                                         }else{
//                                             counter.textContent = '';
//                                         }
//                                     });
//                                 }
            
//                                 formElementInput.append(input);

//                                 break;
//                             }
//                         }
//                     }

//                     if (formElement.element === 'textarea') {

//                         const textarea = document.createElement('textarea');
//                         textarea.id = field;
//                         textarea.name = field;
//                         textarea.disabled = formElement.disabled || false;
//                         textarea.readOnly = formElement.readOnly || false;
//                         textarea.value = formElement.value || '';
//                         textarea.cols = formElement.cols || '';
//                         textarea.rows = formElement.rows || '';
//                         textarea.wrap = formElement.wrap || '';
//                         textarea.placeholder = formElement.placeholder || '';
//                         textarea.dataset.validate = formElement.validate || '';
                       
//                         if(formElement.maxLength){

//                             textarea.maxLength = formElement.maxLength || '';
//                             const counter = document.createElement('span');
//                             formElementLabel.append(counter);

//                             textarea.addEventListener('input', () => {
//                                 if(textarea.value.length > 0){
//                                     counter.textContent = textarea.value.length + ' / ' + textarea.maxLength;                            
//                                 }else{
//                                     counter.textContent = '';
//                                 }
//                             });
//                         }

//                         formElementInput.append(textarea);
//                     }
        
//                     if (formElement.element === 'select') {
        
//                         const select = document.createElement('select');
//                         select.id = field;
//                         select.name = field;
//                         select.disabled = formElement.disabled || false;
//                         select.required = formElement.required || false;
//                         select.multiple = formElement.multiple || false;
        
//                         formElement.options.forEach(option => {
//                             const optionElement = document.createElement('option');
//                             optionElement.value = option.value;
//                             optionElement.innerText = option.label;
//                             select.append(optionElement);
//                         });
        
//                         formElementInput.append(select);
//                     }

//                     tabPanelRow.append(formElementContainer);
//                 };

//                 tabPanel.append(tabPanelRow);
//             };

//         }

//         this.shadow.querySelector(".tab-item").classList.add('active');
//         this.shadow.querySelector(".tab-panel").classList.add('active');



// VERSION CESAR

// Asignación de atributos adicionales
// Object.keys(formElement).forEach(attribute => {

//     if (attribute !== 'label' && attribute !== 'name' && attribute !== 'element') {
   
//         if(attribute == "options") {

//             formElement[attribute].forEach( option => {
               
//                 if(formElement.type == "checkbox"){
//                     console.log(option)
//                 }

//                 if(formElement.type == "radio"){

//                 }

//                 if(formElement.element == "select"){

//                 }
//             });
           
//         }
       
//         else {
//             input.setAttribute(attribute, formElement[attribute]);
//         }
//     }
// });

// elementDiv.append(input)
// fila.appendChild(elementDiv);
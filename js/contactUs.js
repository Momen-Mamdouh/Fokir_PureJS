"use strict"

export class ContactUs{

    
    constructor(){

        this.contactUsData = JSON.parse(localStorage.getItem("contactUsData")) || []; //^^ Retrieve or initialize the array
        this.inputData = {};

        this.inputsData = [
            {   
                inputWidth: `col-md-6`,
                inputName:`Name`,
                inputType:`text`,
                inputPlaceholder:`Name`,
                inputClasses: `form-control nameInput`,
            },

            {
                inputWidth: `col-md-6`,
                inputName:`Email`,
                inputType:`email`,
                inputPlaceholder:`Email`,
                inputClasses: `form-control emailInput`,
            },

            {
                inputWidth: `col-md-12`,
                inputName:`Subject`,
                inputType:`text`,
                inputPlaceholder:`Subject`,
                inputClasses: `form-control subjectInput`,
            }
        ];
        this.lastContactUsSection = `
        <div class="col-sm-12 contact-us-textarea my-2">
              <textarea placeholder="Message for me" name="Comment" rows="4" class="form-control commentInput"></textarea>
           </div>

           <div class="col-sm-12 contact-us-submitBtn mx-2 mt-4 rounded-3 text-center">
               <button class="btn  py-2 border-0" role="submit" disabled="">Send Message</button>
            </div>
         `;
        this.contactUsHeading = document.querySelector(".contact-us-heading");
        this.contactUsSection = document.querySelector(".contact-us-inputs");
        this.errorMessage = `Input is Required.`;

        this.displayData();

        this.nameInput = document.querySelector(".nameInput");
        this.commentInput = document.querySelector(".commentInput");
        this.emailInput = document.querySelector(".emailInput");
        this.subjectInput = document.querySelector(".subjectInput");
        this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  
        this.submitElementBtn = document.querySelector('.contact-us-submitBtn');
        this.submitBtn = document.querySelector('.contact-us-submitBtn button');
        this.allInputs = document.querySelectorAll(".contact-us-input input") ;
   
        this.detectAllInputsBeforeSubmit();

        
    };


    displayData(){
        this.contactUsHeading.innerHTML = `Contact Us`;
        let inputsData = ``;
        this.inputsData.forEach((input)=>{
            inputsData += `
                <div class="${input.inputWidth} contact-us-input my-2">
                    <input name="${input.inputName}"  placeholder="${input.inputPlaceholder}" type="${input.inputType}" class="${input.inputClasses}" value="" required>
                    <div class="error-message text-danger px-3 d-none">${this.errorMessage}</div>
                </div>
            `
        });
        this.contactUsSection.innerHTML = inputsData + this.lastContactUsSection
    }

    detectEmailVaildation(){
        // **Function to give error message if input is empty
            this.emailInput.addEventListener("input",()=>{
                if( this.emailInput.value == ""){
                    this.emailInput.parentElement.classList.remove("vaild");
                    this.emailInput.parentElement.classList.add("error");
                    this.emailInput.nextElementSibling.classList.replace("d-none","d-block") ;
                    this.submitBtn.innerHTML = `Inputs Required`;   
                }
                else if( this.emailInput.value != "" && this.emailRegex.test(this.emailInput.value)) {
                    this.emailInput.parentElement.classList.add("vaild");
                    this.emailInput.parentElement.classList.remove("error");  
                    this.emailInput.nextElementSibling.classList.replace("d-block","d-none"); 
                }
                else{
                    this.emailInput.parentElement.classList.remove("vaild");
                    this.emailInput.parentElement.classList.add("error");
                    this.emailInput.nextElementSibling.classList.replace("d-none","d-block");
                    this.submitBtn.innerHTML = `Inputs Required`;
                }
            }) ;     
    };

    
    detectAllInputsBeforeSubmit(){
        // **Checks all inputs to find if something not match depends on conditons deined below
        this.allInputs.forEach((input)=>{
            
            input.addEventListener("change",()=>{               
                if(input.name == "Email"){
                    this.detectEmailVaildation();
                    
                }
                else{
                    if(input.value ==""){
                        input.nextElementSibling.classList.replace("d-none","d-block");
                        this.submitBtn.setAttribute("disabled",'');
                        this.submitBtn.innerHTML = `Inputs Required`;
                    }
                    else{                   
                        input.nextElementSibling.classList.replace("d-block","d-none");
                        this.submitBtn.removeAttribute("disabled");
                        this.submitBtn.innerHTML = `Send Message`;
                       
                    }
                }

                
               
           })
            
        });
        this.submit();    

    };
    
    
    submit(){
        this.submitBtn.addEventListener("click",()=>{
            this.inputData = {
                name: this.nameInput.value,
                email:  this.emailInput.value,
                comment:  this.commentInput.value,
                subject:  this.subjectInput.value,
            };
            
            this.contactUsData.push( this.inputData);
            localStorage.setItem('contactUsData', JSON.stringify(this.contactUsData));
            console.log(JSON.parse(localStorage.getItem("contactUsData")));  
            this.resetInput();
            
            
        });
    };

    resetInput(){
        this.allInputs.forEach((input)=>{
            input.value = ``;
        });
        this.commentInput.value = ``;
    }

}
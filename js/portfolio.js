"use strict"

export class Portfolio{
    constructor(){
        this.ourPortfolioHeading = document.querySelector(".portfolio-heading");
        this.ourPortfolioHeadingData = `Our Portfolio `;
        this.firstItem = {img:`./images/portfolio/Hand-Watch.jpg`, icon: `fa-solid fa-file-image`, imgAlt:`Hand Watch`};
        this.secondItem = {img:`./images/portfolio/Wrist-Watch.jpg`, icon: `fa-solid fa-link`, imgAlt:`Wrist Watch`};
        this.thirdItem = {img:`./images/portfolio/Labels.jpg`, icon: `fa-solid fa-file-video`, imgAlt: `Labels`};
        this.fourthItem = {img:`./images/portfolio/Shoe.jpg`, icon: `fa-solid fa-file-image`, imgAlt: `Shoe`};
        this.fifthItem = {img:`./images/portfolio/Cards-Box.jpg`, icon: `fa-solid fa-link`, imgAlt: `Cards Box`};
        this.sixthItem = {img:`./images/portfolio/Electrical-Case.jpg`, icon: `fa-solid fa-file-image`, imgAlt: `Electrical Case`};

        this.myData = {
            linkedInLink: `https://www.linkedin.com/in/mo-men-mamdouh-aa5baa20a/`,
            gitHubLink: `https://github.com/Momen-Mamdouh?tab=repositories`,
            facebookLink: `https://www.facebook.com/`,
            twitterLink:`https://www.x.com/`,
        },


        this.portfolioGalleryBtns = Array.from(document.querySelectorAll('.portfolio-section button'));
        this.portfolioModule = document.querySelector('.portfolio-module');
        this.currentDisplayedPortfolioModuleImages = Array.from(document.querySelectorAll('.inner-portfolio-image '));
        this.galleryImagesRow = document.querySelector('.row-portfolio-images');
        this.portfolioCloseBtn = document.querySelector('.close-icon'); 
        
        this.portfolioGalleriesArray = [
            {
                allSection: {
                    first:  this.firstItem,
            
                    second: this.secondItem,
            
                    third:  this.thirdItem,
            
                    fourth: this.fourthItem,
            
                    fifth:  this.fifthItem,
                    
                    sixth:  this.sixthItem,
                    },  
            },
        
            {
                graphicsSelection: {
                    first:  this.secondItem,
            
                    second: this.thirdItem,
            
                    third:  this.fourthItem,
            
                    fourth: this.fifthItem,
            
                    fifth:  this.sixthItem,
                    
                }
            },
        
            {
                webDesignSelection: {
                    first:  this.firstItem,
            
                    second: this.thirdItem,
            
                    third:  this.fifthItem,
                    
                }
            },
        
            {
                brandingSelection:{
                first:  this.secondItem,
                second: this.sixthItem,  
                }
            }   
        ];
        this.allGalleryImages = [
            this.firstItem ,this.secondItem, this.thirdItem,  this.fourthItem, this.fifthItem, this.sixthItem
        ];
        
        this.filteredIndices = [0, 2, 3, 5];
        this.finalIndex;
        this.dialogAltOne = this.allGalleryImages[1].imgAlt;
        this.dialogAltTwo = this.allGalleryImages[4].imgAlt
        this.date = new Date(); //??Used in module to get date of today...

        this.detectGalleryImagesByClickedTabs();
        this.displayPortfolioModule();    
        
    }

    
    detectGalleryImagesByClickedTabs() {
    // **Detects tab clicked and calls displayGalleryImagesOfTabbedGroup()_fn with tab's index
        // ^^Listen to any click in tab and change activated tab to the clicked one, gives tab's index to displayGalleryImagesOfTabbedGroup()_fn 
        this.ourPortfolioHeading.innerHTML = this.ourPortfolioHeadingData;
        this.portfolioGalleryBtns.forEach((link,clickedTabIndex) => {  
            link.addEventListener("click", (e) => {  
                document.querySelector(".btns-row .active").classList.remove("active");
                e.target.classList.add("active");  
                this.displayGalleryImagesOfTabbedGroup(clickedTabIndex);
            })
        });
    }
  

    displayGalleryImagesOfTabbedGroup(index){
        // **Takes tab's index, to take the galleryGropu with the same index from portfolioGalleriesArray[];
            // ^^Get galleryImages through object.values();

        let diplayedgalleryImages = ``;
        this.portfolioGalleryBtns.forEach((i,tabIndex) => {        
            if(index == tabIndex){
                const galleryKey = Object.keys(this.portfolioGalleriesArray[tabIndex])[0];
                const galleryValuesArray = Object.values(this.portfolioGalleriesArray[tabIndex][galleryKey]);
                
                galleryValuesArray.forEach((galleryImage)=>{
                    diplayedgalleryImages += `
                        <div class="col-md-4 portfolio-image">
                            <div class="inner-portfolio-image position-relative overflow-hidden">
                                <img src=${galleryImage.img} alt="${galleryImage.imgAlt}" class="w-100 rounded-2">
                                <div class="image-layer d-flex h-100 w-100 position-absolute"><i class="${galleryImage.icon} "></i>"</div>
                            </div>
                        </div>  
                       `                       
                })
            }   
         });

         this.galleryImagesRow.innerHTML = diplayedgalleryImages;
         
         this.displayPortfolioModule();
         
         

    }

    // !!Here design displays images in module 1,3,4,6 as images only  and 2,5 images displayed in dialog, So we give index conditions
    displayPortfolioModule(){
        // **Listens to any click on galleryImages viewed to get image  data and index.
            // ^^We also call toggleOpenCloseModule()-fn at each index condition. 
            // ^^Closes the module by X-mark_Icon, Goes to next and previous images through  goArrow()_fn.
        
        this.currentDisplayedPortfolioModuleImages = Array.from(document.querySelectorAll('.inner-portfolio-image'));    
        let displayedModuleData = ``;
        const today = `${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}` //** today date by Built-in Date_Object, used in dialog part.

        this.currentDisplayedPortfolioModuleImages.forEach((portfolioImage,index)=>{
            portfolioImage.addEventListener("click", ()=>{
                const targetedPortfolioImageSrc = this.currentDisplayedPortfolioModuleImages[index].getElementsByTagName("img")[0].getAttribute("src");
                const targetedPortfolioImageAlt = targetedPortfolioImageSrc.substring(targetedPortfolioImageSrc.indexOf("o/")+2).replace(".jpg","").split("-").join(" ")
                const galleryImageAlt = this.allGalleryImages[index].imgAlt;
                
                
                if(galleryImageAlt == this.dialogAltOne || galleryImageAlt == this.dialogAltTwo){
                    displayedModuleData = `
                            <div class="dialog bg-white position-absolute start-50 top-50 translate-middle" role="">
                                <div class="modal-dialog ">
                                    <div class="modal-content position-relative">
                                        <div class="modal-header position-relative">
                                        <h5 class="modal-title p-2">${targetedPortfolioImageAlt}</h5>
                                        <i class="fa-solid fa-close close-icon d-flex justify-content-end align-items-center dialog-sm-pos dialog-md-pos" role="button"></i>
                                        </div>
                                        <div class="modal-body">
                                            <div class="inner-dialog-image">
                                                <img src=${targetedPortfolioImageSrc} alt=${targetedPortfolioImageAlt} class="w-100 px-3 my-2 ">
                                            </div>
                                    
                                            <ul class="dialog-content-icons d-flex flex-column align-items-start list-unstyled px-4 py-1" >
                                                    <li class="fa-solid fa-user py-2"><span>Mo'men &nbsp Mamdouh</span></li> 
                                                    <li class="fa-solid fa-globe py-2"><a target="_blank" href="${this.myData.gitHubLink}">github.com</a></li>
                                                    <li class="fa-solid fa-calendar py-2"> <span>${today}</span></li>
                                            </ul>
                                            <h4 class="px-4">Share</h4>
                                            <ul class="list-unstyled px-3 dialog-footer-icons" >
                                                <li class="fa-brands fa-facebook-f pe-2  fs-5"><a href="${this.myData.facebookLink}"></a></li> 
                                                <li class="fa-brands fa-twitter pe-2  fs-5"><a href="${this.myData.twitterLink}"></a></li>
                                                <li class="fa-brands fa-linkedin-in pe-2  fs-5"><a href="${this.myData.linkedInLink}"></a></li>
                                                <li class="fa-brands fa-github pe-2  fs-5"><a href="${this.myData.gitHubLink}"></a></li>
                                            </ul>
                                        </div>      
                                    </div>
                                </div>
                            </div>

                    `
                    this.toggleOpenCloseModule(displayedModuleData);
                    }

                else{
                    displayedModuleData = `
                            <div class="container">
                                <div class="inner-image row justify-content-center align-items-center ">
                                    <div class="col-sm-12 col-md-6">
                                        <div class="w-sm-w-75 w-md-100 m-auto"> <img src="${targetedPortfolioImageSrc}" alt=${targetedPortfolioImageAlt} class="w-100 rounded-2"> </div>
                                        <i class="fa-solid fa-close close-icon " role="button"></i>
                                        <p>${index+1} of 4</p> 
                                        
                                    </div>
                                </div>

                                <div class="portfolio-module-icons position-absolute translate-middle top-50 start-50 w-100">
                                
                                    <i class="fa-solid fa-arrow-right right-arrow-icon"></i>
                                    <i class="fa-solid fa-arrow-left left-arrow-icon"></i>
                                </div>
                            </div>

                        `    
                    this.toggleOpenCloseModule(displayedModuleData,index);    
                }
 
                });
               
            }) 
          
    }

        toggleOpenCloseModule(selectedImageToModule, index) {
            // **Here we showModal with selected moduleImageData from displayPortfolioModule()_fn., and also close it by closeDisplayedPortfolioModule()_fn;

            this.portfolioModule.innerHTML = selectedImageToModule;
            this.portfolioModule.classList.replace("d-none", "d-flex");
            
            this.closeDisplayedPortfolioModule();
        
            const rightArrow = document.querySelector(".right-arrow-icon");
            const leftArrow = document.querySelector(".left-arrow-icon");
            this.arrowGo(rightArrow, leftArrow);

            this.finalIndex = index; //^^Update the active index.          
        }

        arrowGo(rtArrow, ltArrow) {
            // ** ?_Optional Chianing Operator to ensure that this arrowIcon not null and listen to any click to go next or previous
            // ^^ Through these fns we update the moduleImage at clicking, as each Click we increase or decrease depends on the fn called
            rtArrow?.addEventListener("click", () => this.goNext());
            ltArrow?.addEventListener("click", () => this.goPrevious());
        }
        // **I give intial value to finalIndex variable to avoid any null or undefined values 
        //**We ensure by %-operator that we stays in filtered array range if we path if intailize it with zero.
        goNext() {
            if (this.finalIndex == null) {
                this.finalIndex = this.indexArray[0] ?? 0; //^^Initialize finalIndex from the current state.
            }
            
            const currentFilteredIndex = this.filteredIndices.indexOf(this.finalIndex);
            const nextFilteredIndex = (currentFilteredIndex + 1) % this.filteredIndices.length; 

            this.finalIndex = this.filteredIndices[nextFilteredIndex];
            this.updateModuleDisplay(this.finalIndex);
        }
        
        goPrevious() {
            if (this.finalIndex == null) {
                this.finalIndex = this.indexArray[0] ?? 0; //^^Initialize finalIndex from the current state.
            }
            const currentFilteredIndex = this.filteredIndices.indexOf(this.finalIndex);
            const prevFilteredIndex = (currentFilteredIndex - 1 + this.filteredIndices.length) % this.filteredIndices.length; //^^Here  we ensure by %-operator that we stays in filtered array range if we path if intailize it with zero

            this.finalIndex = this.filteredIndices[prevFilteredIndex];
            this.updateModuleDisplay(this.finalIndex);
        }

      
        updateModuleDisplay(index) {
            // **We get the image src and alt by the finalIndex we get from goFns as before in displayPortfolioModule-fn,then inject toggleOpenCloseModule()_fn with new modalData.
            // **As we can't get the updated value from displayPortfolioModule-fn as at each call it re-intialize the finalIndex value so we make toggleOpenCloseModule which as for index and display the module depends on the index it gets
            const nextImage = this.currentDisplayedPortfolioModuleImages[index].getElementsByTagName("img")[0].getAttribute("src");
            const nextAlt = nextImage.substring(nextImage.indexOf("o/") + 2).replace(".jpg", "").split("-").join(" ");
        
            const nextModuleData = 
                `  <div class="container">
                        <div class="inner-image row justify-content-center align-items-center">
                            <div class="col-sm-12 col-md-6">
                                <div class="w-sm-w-75 w-md-100 m-auto"> <img src="${nextImage}" alt=${nextAlt} class="w-100 rounded-2"> </div>
                                <i class="fa-solid fa-close close-icon " role="button"></i>
                                <p>${index + 1} of ${this.currentDisplayedPortfolioModuleImages.length}</p> 
                                
                            </div>
                        </div>

                        <div class="portfolio-module-icons position-absolute translate-middle top-50 start-50 w-100">
                        
                            <i class="fa-solid fa-arrow-right right-arrow-icon"></i>
                            <i class="fa-solid fa-arrow-left left-arrow-icon"></i>
                        </div>
                    </div>`
            this.toggleOpenCloseModule(nextModuleData, index);
        }
        
    
        closeDisplayedPortfolioModule(){ 
  
            document.querySelector('.close-icon').addEventListener("click",()=>{
                this.portfolioModule.classList.replace("d-flex","d-none"); 
                this.portfolioModule.innerHTML = `` ;             
            });
            window.addEventListener("keydown",(e)=>{
                    if(e.key == `Escape` ){
                        this.portfolioModule.classList.replace("d-flex","d-none");
                        this.portfolioModule.innerHTML = `` ; 
                    }      
            });

            
        }


}






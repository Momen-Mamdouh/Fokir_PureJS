"use strict"

export class MySwipper{


    constructor(){
        this.feedbackHeading = document.querySelector(".feedback-heading");
        this.feedbackHeadingData = `Our Feedback`
        this.locationLink = `https://www.google.com/maps/place/Al+Maadi,+Maadi,+Cairo+Governorate/data=!4m2!3m1!1s0x145847f5e5c8055b:0x8b21ef9bc90d1941?sa=X&ved=1t:242&ictx=111`;
        this.fullStarIcon = `fa-solid fa-star`;
        this.halfStarIcon = `fa-solid fa-star-half-alt`;
        this.swipperWrapper = document.querySelector(".swiper-wrapper");
        this.swiperData = [
           {
                cardImageSrc: `./public/images/cvImage.jpg`,
                cardName: `Mo'men Mamdouh`,
                cardPesronJob: `Front-end Developer`,
                cardImageDescription: `Cv Image`,
                cardLocation: `Maadi`,
                cardParagraph: `Skilled in HTML, CSS, JavaScript, and frameworks (Angular - React).Can create responsive,
                                    user-friendly designs, focusing on performance, accessibility, and seamless user
                                    experiences.`,
                cardRating:`        <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>`,

            },
           {
                cardImageSrc: `./public/images/phtyon-developer.jpg`,
                cardName: `Mo'men Mamdouh`,
                cardPesronJob: `Python Developer`,
                cardImageDescription: `Cv Image`,
                cardLocation: `Maadi`,
                cardParagraph: `Skilled in using the Python programming language to create software applications, websites, scripts, or tools.
                                    Created many programs approaches 50 one in different parts desktops and websites.`,
                cardRating:`        <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.halfStarIcon}"></i></li>`,

            },
           {
                cardImageSrc: `./public/images/artist-cv-image.jpg`,
                cardName: `Mo'men Mamdouh`,
                cardPesronJob: `Artist`,
                cardImageDescription: `Cv Image`,
                cardLocation: `Maadi`,
                cardParagraph: `Skilled in shading, texture rendering, and precision drawing to bring their works to life. 
                                my artistry can evoke emotion, tell stories, or simply showcase beauty through the simple medium of a pencil.`,
                cardRating:`        <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.fullStarIcon}"></i></li>
                                    <li><i class="${this.halfStarIcon}"></i></li>
                                    `,
 
            }
        ]
        this.displayedDataInSwipper = ``
        this.displayDataInSwiper();

    }

    displayDataInSwiper(){
        this.feedbackHeading.innerHTML = this.feedbackHeadingData;
        this.swiperData.forEach((card)=>{
               this.displayedDataInSwipper += `
                        <div class="row-sm d-md-flex  swiper-slide py-5 overflow-hidden">
                            <div class="col-sm-6 col-md-12 inner-swipper-image ">
                                <img src=${card.cardImageSrc} alt=""${card.cardImageDescription}>
                            </div>
                            <div class="col-sm-6 col-md-12 inner-swiper-content w-sm-50 w-md-100">
                                <h3>${card.cardName}</h3>
                                <h4 class="px-3"><small>${card.cardPesronJob}</small></h4>
                                <a
                                    href="${this.locationLink}"><i
                                        class="fa-solid fa-map-marker-alt pe-1"></i> ${card.cardLocation}</a>
                               

                                <p class="py-2 w-75">${card.cardParagraph}</p>
                                <ul class="d-flex star-icons-list list-unstyled">
                                        ${card.cardRating}
                                </ul>
                            </div>

                        </div>
                    `           
        });

        this.swipperWrapper.innerHTML = this.displayedDataInSwipper;
    }

}
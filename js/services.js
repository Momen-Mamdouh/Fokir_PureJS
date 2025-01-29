"use strict"

export class Service{

    constructor(){
        this.serviceSectionHeading = document.querySelector(".services-heading");
        this.serviceHeadingData = `Our Service`;
        this.serviceRowContentData = [
            {
                icon:`fa-solid fa-calculator`,
                heading:`UI/UX Design`,
                paragraph:`UI/UX design focuses on creating visually appealing, intuitive, and responsive interfaces that
                        enhance user experience. It combines aesthetics with functionality to ensure seamless
                        interaction and engagement.`,
            },


            {
                icon:`fa-solid fa-laptop-code`,
                heading:`App Development`,
                paragraph:`App development focuses on building responsive, interactive, and user-friendly
                        interfaces using technologies like HTML, CSS, and JavaScript. It ensures seamless user
                        experiences across devices and platforms.`,
            },

            {
                icon:`fa-solid fa-square-poll-vertical`,
                heading:`Product Design`,
                paragraph:`Product design focuses on crafting visually appealing, responsive, and user-friendly
                        interfaces. It bridges design and development, ensuring seamless user interactions and an
                        engaging experience across devices.`,
            },

            {
                icon:`fa-solid fa-gears `,
                heading:`App Deployment`,
                paragraph:`App deployment involves delivering a functional, optimized user interface to
                        production. It ensures the app is responsive, performs efficiently, and is accessible to users
                        across devices and platforms.`,
            },
        ]

        this.serviceContentRow = document.querySelector(".services-row");


        this.displayData();
    }







    displayData(){
        this.serviceSectionHeading.innerHTML = this.serviceHeadingData;
        let serviceData = ``;
        this.serviceRowContentData.forEach((column)=>{
            serviceData += `
                <div class="col-md-3 p-4 service-block text-center">
                    <h4><i class="${column.icon}"></i></h4>
                    <h3 class="py-2">${column.heading}</h3>
                    <p>${column.paragraph}</p>
                </div>
                `
        });

        this.serviceContentRow.innerHTML = serviceData;
    }

}
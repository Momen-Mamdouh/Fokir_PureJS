"use strict"
import { brandsIconData } from "./main.js";
export class About{

    constructor(){
        this.AboutImageLayerIconsData = brandsIconData;
        this.aboutImageLayer = document.querySelector(".about-inner .image-layer ul");
        this.aboutParagraphElement = document.querySelector(".about-content .inner-content p");
        this.aboutImageSrc = `/images/fokir-cv-image.jpg`;
        this.aboutImageAlt = `Mo'men Mamdouh Personal CV Image`;
        this.aboutImageElement = document.querySelector(".about-inner .image-inner img");
        this.cvDataList = document.querySelector(".about-content .cv-data-list");
        this.aboutContentBtns = document.querySelector(".about-content-btns")

        this.cvData = [
            {
                heading: `Name:`,
                data: `Mo'men Mamdouh`,
                class:`col-md-4`,
            },

            {
                heading: `Job Title:`,
                data: `Front-end Developer`,
                class:`col-md-8`,
            },

            {
                heading: `Age:`,
                data: `25`,
                class:`col-md-4`,
            },

            {
                heading: `Location:`,
                data: `Maadi`,
                class:`col-md-8`,
            },

            {
                heading: `FreLance:`,
                data: `Available`,
                class:`col-md-4`,
            },

            {
                heading: `Email:`,
                data: `momenmadmouhw@gmail.com`,
                class:`col-md-8`,
            },
        ];
        this.aboutBtns = [
            {
                btnIcon: `fa-solid fa-download`,
                btnString:`Download Cv`,
                btnData: this.aboutImageSrc,
            },

            {
                btnIcon: `fa-solid fa-paper-plane`,
                btnString:`Hire Me`,
                btnData: ``,
            },
        ]

        this.aboutParagraph = `Obtain a challenging position as a Front-End Developer where I can leverage my skills in HTML, CSS, JavaScript, and frameworks like Angular to build responsive, user-friendly, and visually appealing web applications. I aim to contribute to an innovative team, continuously enhance my technical expertise, and deliver exceptional digital experiences that meet both user needs and business goals.`


        this.displayData();
    }


    displayData(){

        let imageLayerIconsData = ``;
        this.AboutImageLayerIconsData.forEach((icon)=>{
            imageLayerIconsData += `
                <li class="px-2"><a href="${icon.iconLink}"><i class="${icon.icon}"></i></a></li>
                `
        });

        this.aboutImageLayer.innerHTML = imageLayerIconsData;
        this.aboutParagraphElement.innerHTML = this.aboutParagraph;
        this.aboutImageElement.setAttribute("srcset", this.aboutImageSrc);
        this.aboutImageElement.setAttribute("alt", this.aboutImageAlt);

        let cvData = ``;
        this.cvData.forEach((data)=>{
            cvData += `
                <li class="${data.class}"><strong>${data.heading}</strong><span>${data.data}</span></li>
            `
        });
        this.cvDataList.innerHTML = cvData;

        let btnData = ``;
        this.aboutBtns.forEach((btn)=>{
            btnData += `
                <a href="#" class="btn  me-md-3 me-sm-0 text-center " download="${btn.btnData}"> ${btn.btnString} <i
                                    class="${btn.btnIcon} ps-md-3 ps-sm-1"></i></a>
            `
        });
        this.aboutContentBtns.innerHTML = btnData;

    }

}
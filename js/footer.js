"use strict"
import { brandsIconData } from "./main.js";
export class Footer{

    constructor(){

        this.footerIcons = brandsIconData;
           
        this.footerParagrapData = ` Copy Right 2018 © By <a href="./index.html">Theme-fair</a> All Rights Reserved`
        this.footerIconsList = document.querySelector(".footer-icons ul");
        this.footerSectionParagraph = document.querySelector("footer p");
        this.displayFooterData();
    
    }


    displayFooterData(){
        this.footerSectionParagraph.innerHTML = this.footerParagrapData;
        let footerIcons = ``;
        this.footerIcons.forEach((icon)=>{
            footerIcons += ` 
                 <li class="px-3"><a target="_blank" href="${icon.iconLink}"><i class="${icon.icon}"></i></a></li>
            `
        });

        this.footerIconsList.innerHTML = footerIcons;

    }
}
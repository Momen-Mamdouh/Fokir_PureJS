"use strict"



export class Blog{

    constructor(){

      this.blogHeading = document.querySelector(".blog-heading")

      this.blogData = [
       
        {
          mediaDisplayed: `<a href="https://www.javascript.com/"> <img src="./public/images/blog/java-script-logo.jpg" alt="Java Script Logo" class="w-100" height="229px"></a>`,
          postDate: `23 November, 2015`,
          postName: `Java Script Blog Post`,
          postParagraph: `JavaScript powers the web with interactive features. From DOM manipulation and event handling to async programming and APIs, it's the essential tool for web development success.`,
          postLink: `https://www.javascript.com/`,
        },
          
        {
          mediaDisplayed: `<div id="player" class="blog-video ">
                            <iframe width="100%" height="223" src="https://www.youtube.com/embed/aRGdDy18qfY" title="Learn HTML iframes 
                            // in 3 minutes 🖼️" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            // gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            // allowfullscreen></iframe>
                        </div>`,

          postDate: `20 April, 2018`,
          postName: `IFrames in HTML`,
          postParagraph: `Create AI-powered web apps using HTML. Embed AI models with iframes, APIs, or WebAssembly for seamless integration, enhancing user experience with smart, dynamic content.`,
          postLink: `https://developers.google.com/youtube/iframe_api_reference`,

        },

        {
          mediaDisplayed: `<a href="https://angular.dev/"> <img src="./public/images/blog/angular.jpg" alt="" class="w-100" height="229px"></a>`,
          postDate: `17 May, 2017`,
          postName: `Angular Blog Post`,
          postParagraph: `Angular is a robust framework for building scalable web apps. Master features like components, directives, and dependency injection to create dynamic, high-performance applications effortlessly.`,
          postLink: `https://angular.dev/`,
        }
      ]
        this.mediaContainer = document.querySelector('.blog-content');
        this.displayBlogContent();
    }


    displayBlogContent(){
   // **Function to display Data from blogData-Object  into HTML.

      this.blogHeading.innerHTML = `Our Blog` ;
      let displayedData = ``;
      this.blogData.forEach((post)=>{
        
        displayedData += `
              <div class="col-md-4 col-sm-12 mb-sm-4  blog">

                    <div class="post-media">
                        ${post.mediaDisplayed}
                    </div>

                    <div class="post-content py-4 px-3 ">

                        <p class="post-date"> ${post.postDate}</p>

                        <h4 class="post-name pb-2">${post.postName}</h4>

                        <p class="post-paragraph">${post.postParagraph}</p>

                        <div class="post-link">
                            <a href=${post.postLink}>Read More <i class="fa-solid fa-arrow-right-long fa-1x"></i></a>
                        </div>

                    </div>
                </div>
        `
      })

      this.mediaContainer.innerHTML = displayedData;

    }


}
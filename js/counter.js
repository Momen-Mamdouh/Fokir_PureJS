"use strict"

export class Counter{

    constructor(){

        this.countsData = {
            items:{
                members: {
                    itemIcon: "fa-users",
                    itemCount: 568,
                    itemDescription: "Team members",
                },

                projects: {
                    itemIcon: "fa-laptop-file",
                    itemCount: 679,
                    itemDescription: "Complete projects",
                },

                downloads: {
                    itemIcon: "fa-cloud-download",
                    itemCount: 758,
                    itemDescription: "Files download",
                },

                codes: {
                    itemIcon: "fa-coffee",
                    itemCount: 1202,
                    itemDescription: "Lines of code",
                }
            }
        };

        this.counterItemsContainer = document.querySelector('.counters-container');        
        this.timeIntervalToDisplayCount = 5000;
        this.dispalyCounterItemValues = ``


        this.displayCounterItems();
        this.observeCountersSection();
       
    }

   displayCounterItems(){
    // **Dispalys counterItems, loop through keys in itemsObject inside countsData[] get the key which is also object and lop through by using map_Object.
    const counterKeys = Object.keys(this.countsData.items);
    counterKeys.forEach((itemKey)=> {
        const countItems = this.countsData.items[itemKey];
        let counterItemsMap = new Map().set("item", countItems);

            counterItemsMap.forEach((countItemObject)=>{

                this.dispalyCounterItemValues += `
                        <div class="count-item col-md-3 col-sm-12 mb-sm-4">
                            <i class=" fa-solid ${countItemObject.itemIcon}"></i>
                            <h3 class="py-3 counter"  data-target="${countItemObject.itemCount}">0</h3>
                            <h5>${countItemObject.itemDescription}</h5>
                        </div>
                `
            });
            
            this.counterItemsContainer.innerHTML = this.dispalyCounterItemValues; 
        });
    };

    resetCounters() {
        // **Function to resest count in each item to 0.Called at observeCountersSection()_fn at viewing the section needed
        const counters = document.querySelectorAll(".counter");
        counters.forEach((counter) => {
            counter.innerText = "0"; 
        });
    }

    animateCounters() {
        // **Loops through counters in each item and get the value of endCounting and current count of the item detected
        // **Define how much we inceremnt it, depends on the endCountingValue. However if end_value is more than the current_value we counts By using setTimeout that calls updateCount()_fn

        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
            const updateCount = () => {
                // ^^ +_sign to let this value be number type
                const target = +counter.getAttribute("data-target"); //^^Defined from this.countsData
                const current = +counter.innerText;

                const increment = Math.ceil(target / (this.timeIntervalToDisplayCount / 50)); // ^^Calculate increment based on duration

                if (current < target) {
                    counter.innerText = current + increment;
                     setTimeout(updateCount, 100); //^^ Update every 75ms
                } else {
                    counter.innerText = target; //^^ Ensure it ends at the target value
                }
            };

            updateCount();
        });
    }

    observeCountersSection() {
        // **Function to call IntersectionObserver-Api, at which we loop in each entry in intersted defined section to define if we observe it or not
        // **At obserbing we reset the value of count by resetCounters-fn and then calls animateCounters-fn to increments the counter again till the endValue.

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.resetCounters(); // Reset counters to 0
                        this.animateCounters(); // Start the animation again
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(this.counterItemsContainer); //!! Here we give the intersted_Section
    }
}

//^^ Ensure this script runs after the DOM is loaded, so that it put after the class
document.addEventListener("DOMContentLoaded", () => {
    new Counter();
});
   

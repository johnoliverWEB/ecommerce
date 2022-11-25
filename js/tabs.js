export let renderTabs= () => {

    let tabItems = document.querySelectorAll('.tab-item');
    let tabsContents = document.querySelectorAll (".tab-content");

    tabItems.forEach(tabItem => {

        tabItem.addEventListener("click", () => {

            tabItems.forEach(tabsItem => {
                tabsItem.classList.remove("active");
            });
               
            tabItem.classList.add("active");

            tabsContents.forEach(tabContent => {
                if(tabContent.dataset.tab == tabItem.dataset.tab){
                    tabContent.classList.add ("active");
                }else{
                    tabContent.classList.remove("active");
                }
            
            });

        });

    });
};

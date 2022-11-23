export let rendertabs= () => {

    let tabItems = document.querySelectorAll('.tab-item');
    let tabsContents = document.querySelectorAll (".tabs-contents");

    tabItems.forEach(tabItem => {

        tabItem.addEventListener("click", () => {

            tabItems.forEach(tabsItem => {
                tabsItem.classList.remove("tab-active");
            });
               
            tabItem.classList.add("tab-active");

            tabsContents.forEach(tabsContents => {
                if(tabsContents.dataset.tab == tabItem.dataset.tab){
                    tabsContents.classlist.add ("tab-active");

                }else{
                    tabsContents.classlist.remove("tab-active");
                }
            
            });

        });

    });
};

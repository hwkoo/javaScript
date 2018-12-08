var title = document.querySelector("#title1");
//var hiList = document.querySelectorAll(".hi");
const CLICKED_CLASS = "clicked";

function handleClick(){
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }
    else{
        title.classList.add(CLICKED_CLASS);
    }
    */
   title.classList.toggle(CLICKED_CLASS);
    
}

function init(){
    title.addEventListener("click", handleClick);
    //console.dir(hiList);
    hiList.forEach(function(hi) {
        hi.addEventListener("click", handleClick);
      });
    
}
init();
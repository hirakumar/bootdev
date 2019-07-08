export const Container = function() {

    try {
        
        let allContainer = document.querySelectorAll('.container');
        let i=0;
         while(i<allContainer.length){
            allContainer[i].addEventListener('dragover',Container.prototype.allowDrop);
            allContainer[i].addEventListener('drop',Container.prototype.dropme);
            i++;
        }
    } catch (err) {
        console.log("Error on Container :" + err);
    }


}

Container.prototype.allowDrop = function(ev) {
   try {
        ev.currentTarget.style.outline="dashed 2px #ccc";
        ev.preventDefault();
        ev.stopPropagation();
    } catch (err) {
        console.log("Error on Container/allowDrop :" + err);
    }
}


Container.prototype.dropme = function(ev) {
    try {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var comp = document.createElement(ev.dataTransfer.getData("component"));
        ev.currentTarget.style.outline="dashed 0px #ccc";
        ev.currentTarget.appendChild(comp);
        comp.addEventListener('remove',Container.prototype.removeComponent);
        comp.addEventListener('changeAttribute',Container.prototype.changeComponentAttribute);
        ev.stopPropagation();
    } catch (err) {
        console.log("Error on Container/dropme :" + err);
    }
}

Container.prototype.removeComponent=function(e){
     try {
    e.currentTarget.parentElement.removeChild(e.currentTarget);
     } catch (err) {
        console.log("Error on Container/removeComponent :" + err);
    }
}
Container.prototype.changeComponentAttribute=function(e){
    e.currentTarget.setAttribute("data",JSON.stringify(e.detail.value));
}
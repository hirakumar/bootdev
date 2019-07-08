export const SingleColPallet = function() {

    var allDivs = document.querySelectorAll('.container .row div');
    // Query All Columns of Bootstrap
    try {
        if (allDivs.length > 0) {
            allDivs.forEach(function(item) {
                var patt = RegExp("col-", "g");
                if (patt.test(item.className)) {
                    item.classList.add('bootCol');
                    item.addEventListener('mouseenter', SingleColPallet.prototype.mouseEnterOnEachCol);
                    item.addEventListener('mouseleave', SingleColPallet.prototype.mouseLeaveOnEachCol);
                }
            })
        }
    } catch (err) {
        console.log("Error :" + err);
    }


}


SingleColPallet.prototype.mouseEnterOnEachCol = function(e) {

    try {
        e.currentTarget.style.outline = "dotted 1px red";


        let patt = /hover/g;

        if (!patt.test(e.currentTarget.className)) {

            e.currentTarget.classList.add('hover');

            // ADD
            let singlecolpallet = document.createElement('app-singlecolpallet')

            e.currentTarget.appendChild(singlecolpallet);
            singlecolpallet.addEventListener("action", function(e) {

                if (e.detail.value == "add") {

                    SingleColPallet.prototype.increaseCol(e);
                } else if (e.detail.value == "minus") {
                    SingleColPallet.prototype.decreaseCol(e);
                }
            })

        }
    } catch (err) {
        console.log("Error on SingleColPallet/mouseEnterOnEachCol :" + err);
    }

}

SingleColPallet.prototype.decreaseCol = function(e) {
    try {
        let colEle = e.currentTarget.parentNode;
        let colClass = colEle.className;
        let targetChar = "col-" + window.store.device;
        let patt = new RegExp(targetChar, "g");
        let colNum;

        let classes=e.currentTarget.parentNode.className.split(" ");
      
        let myClass=classes.find(function(item){
            console.log(item);
           if(patt.test(item)){
            return true;
           }else{
            return false;
           }
        })
        if(myClass!=undefined){
           // let oldClass = myClass;
            let initNum;
            initNum=myClass.split("-")[2];            
            let updateNum = parseInt(initNum);
            updateNum--;
            
            if(updateNum>=1 && updateNum<=12){
                colEle.className = colClass.replace(myClass, "col-" + window.store.device + "-" + updateNum);
            }   

        }else{
            let initNum = colClass.charAt(targetChar.length + 1);
            initNum++;
            colEle.classList.add('col-' + window.store.device + "-" + initNum);
        }
        
        e.preventDefault();
    } catch (err) {
        console.log("Error SingleColPallet/decreaseCol :" + err);
    }

}

SingleColPallet.prototype.increaseCol = function(e) {
    try {
        let colEle = e.currentTarget.parentNode;
        let colClass = colEle.className;
        let targetChar = "col-" + window.store.device;
        let patt = new RegExp(targetChar, "g");
        let colNum;

        let classes=e.currentTarget.parentNode.className.split(" ");
      
        let myClass=classes.find(function(item){
            console.log(item);
           if(patt.test(item)){
            return true;
           }else{
            return false;
           }
        })
        if(myClass!=undefined){
           // let oldClass = myClass;
            let initNum;
            
            initNum=myClass.split("-")[2];
            
            let updateNum = parseInt(initNum);
            updateNum++;
            
            if(updateNum>=1 && updateNum<=12){
                colEle.className = colClass.replace(myClass, "col-" + window.store.device + "-" + updateNum);
            }            

        }else{
            let initNum = colClass.charAt(targetChar.length + 1);
            initNum++;
            colEle.classList.add('col-' + window.store.device + "-" + initNum);
        }
        
        e.preventDefault();
    } catch (err) {
        console.log("Error SingleColPallet/increaseCol :" + err);
    }



}

SingleColPallet.prototype.mouseLeaveOnEachCol = function(e) {
    try {
        let eles = e.currentTarget.querySelectorAll('app-singlecolpallet');
        if (eles.length > 0) {
            e.currentTarget.style.outline = "solid 0px red";
            e.currentTarget.classList.remove('hover');
            e.currentTarget.removeChild(eles[0]);
        }
    } catch (err) {
        console.log("Error SingleColPallet/mouseLeaveOnEachCol :" + err);
    }

}
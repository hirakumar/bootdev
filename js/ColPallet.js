export const ColPallet = function() {

    try {
        let containers = document.querySelectorAll('.container');
        if (containers.length > 0) {
            containers.forEach((item) => {
                item.style.border = "solid 1px green";
                // Mouse Enter in Container
                item.addEventListener('mouseenter', ColPallet.prototype.mouseEnterOnContainer);

                // Mouse Leave in Container
                item.addEventListener('mouseleave', ColPallet.prototype.mouseLeaveOnContainer);
            })
        }
    } catch (err) {
        console.log("Error on ColPallet :" + err);
    }


}


ColPallet.prototype.mouseEnterOnContainer = function(e) {
    try {

        let allCols = e.currentTarget.querySelectorAll('.col-md-4');
        allCols.forEach((colEle) => {
            colEle.style.outline = "solid 1px blue";
        })

        this.currentContainer = e.currentTarget;
        // Create Container Pallet
        let pallets = e.currentTarget.querySelectorAll('.containerPallet');
        if (pallets.length < 1) {

            let containerPalletHTML = document.createElement('div');

            containerPalletHTML.innerHTML = `<app-colpallet></app-colpallet>`;

            event.currentTarget.insertBefore(containerPalletHTML.firstChild, event.currentTarget.firstChild);
            event.currentTarget.parentNode.style.position = "relative";


        }
    } catch (err) {
        console.log("Error on ColPallet/mouseEnterOnContainer :" + err);
    }

}


ColPallet.prototype.mouseLeaveOnContainer = function(e) {
    try {

        let allCols = e.currentTarget.querySelectorAll('.col-md-4');
        allCols.forEach((colEle) => {
            colEle.style.outline = "solid 0px blue";
        })

        let pallets = e.currentTarget.querySelectorAll('app-colpallet');

        if (pallets.length > 0) {
            e.currentTarget.removeChild(pallets[0]);
        }
    } catch (err) {
        console.log("Error on ColPallet/mouseLeaveOnContainer :" + err);
    }

}
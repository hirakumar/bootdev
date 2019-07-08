export const Global = function(){
	
	window.store={};
	Global.prototype.setDevice(window.innerWidth);
	
	window.addEventListener('resize',function(){
		Global.prototype.setDevice(window.innerWidth);
	})
	
} 
Global.prototype.setDevice=function(winWidth){

	if(winWidth<=575.98){
		window.store.device='xs';
	}else if(winWidth>=576 && winWidth<=767.98){
		window.store.device='sm';
	}else if(winWidth>=768 && winWidth<=991.98){
		window.store.device='md';
	}else if(winWidth>=992 && winWidth<=1199.98){
		window.store.device='lg';
	}else if(winWidth>=1200){
		window.store.device='xl';
	}

}
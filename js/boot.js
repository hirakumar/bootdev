import {Global} from "./Global.js";
import {ColPallet} from "./ColPallet.js";
import {SingleColPallet} from "./SingleColPallet.js";
import {Container} from "./Container.js";

// Self Invoke
(function(){
	try{
new Global();
	new ColPallet();
	new SingleColPallet();
	new Container();

         


	}catch(err){
		console.log("Error on boot" + err );
	}
		
})();
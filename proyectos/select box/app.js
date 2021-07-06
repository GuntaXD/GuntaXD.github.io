let selectBox_selection = document.querySelector('.selectBox__selection');
let selectBox = document.querySelector(".selectBox");
let selectBox_list = document.querySelector('.selectBox__list');

selectBox.addEventListener("click",()=>{
	if( selectBox.className == "selectBox--active"){
		selectBox.className = "selectBox";
		selectBox_list.style.cssText = "animation: decreciendo .8s forwards ease;"
		selectBox_list.className = "selectBox__list";
	}else{
		selectBox.className = "selectBox--active";
		selectBox_list.style.cssText = "";
		selectBox_list.className = "selectBox__list--active";
	}
})

let selectBox_option = document.getElementsByClassName('selectBox__option');

for( let i in selectBox_option ){
	let option = selectBox_option.item(i);
	option.addEventListener('click',seleccionado);
}

function seleccionado(){
	selectBox_selection.innerHTML = this.innerHTML;
}
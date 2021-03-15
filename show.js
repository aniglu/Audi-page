function show1() {
    let x = document.getElementById("navilist");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  function changeImage(a) {
    const max = 5
    var fullPath = a.src;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
    var num = parseInt(filename.substring(0,1));
    if(num !== max){
        var newIndexImage = num + 1;
		actualShowPic = newIndexImage;
        document.getElementById("imgClickAndChange").src = `gal/${newIndexImage}.png`
    }else{
		actualShowPic = 0;
        document.getElementById("imgClickAndChange").src = "gal/1.png";        
    }
	
   
}        
        let pic = new Array();
        pic[0] = "gal/1.png"
        pic[1] = "gal/2.png"
        pic[2] = "gal/3.png"
        pic[3] = "gal/4.png"
        pic[4] = "gal/5.png"
       
  /*      
function changePic(){
    let max = pic.length;
    let a = 0;
    document.getElementById("imgClickAndChange").src = pic[a];	
	a++;
	if(max==a) {
		a = 0;
	} 
}
function setPicInterval(){
let interval = setInterval(changePic, 500);
}
setPicInterval();*/
let actualShowPic = 1;
function insertPic(){

  if(actualShowPic < pic.length){
 
    document.getElementById("imgClickAndChange").src = pic[actualShowPic];
	actualShowPic= actualShowPic+1;
  }
  else{
	  actualShowPic = 0;
 
      document.getElementById("imgClickAndChange").src = pic[actualShowPic];
    }
  
}

function setChPicInterval(){
  let interval = setInterval(insertPic, 3500);
  }
  setChPicInterval();
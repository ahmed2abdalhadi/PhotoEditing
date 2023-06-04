
let saturate = document.getElementById("saturate");
let contrast= document.getElementById("contrast");
let Brightness = document.getElementById("Brightness");
let Sepia = document.getElementById("Sepia");
let Grayscale = document.getElementById("Grayscale");
let Blur = document.getElementById("Blur");
let HueRotate = document.getElementById("Hue-Rotate");
// -----------------------------------
let upload= document.getElementById("upload");
let Download= document.getElementById("Download");
let img =document.getElementById("img");
// ---------------------------------
let Reset= document.getElementById('Reset');
let imgBox = document.getElementById('.img-box');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resetValue(){
   img.style.filter = 'none';
    saturate  .value ='100';
    contrast .value ='100';
    Brightness .value ='100';
    Sepia.value ='0';
    Grayscale.value ='0';
    Blur .value ='0';
    HueRotate.value ='0';

}


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
window.onload = function(){
    Download.style.display ='none';
    Reset.style.display ='none';
    imgBox.style.display ='none';
}

upload.onchange = function(){
    resetValue();
    Download.style.display ='block';
    Reset.style.display ='block';
    // imgBox.style.display ='block';
     
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
 
    }

    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display = 'none';

    }
}

let filters =document.querySelectorAll("ul li input");
filters.forEach(filter=>{
  filter.addEventListener('input',function(){
    ctx.filter=
 `
 saturate(${saturate.value}%)
 contrast(${contrast.value}%)
 Brightness(${Brightness.value}%)
 Sepia(${Sepia.value}%)
 Grayscale(${Grayscale.value})
 Blur(${Blur.value}px)
 Hue-Rotate(${HueRotate.value}deg)
  `
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
  })
})



Download.onclick = function(){
    Download.href = canvas.toDataURL();
}

 
    
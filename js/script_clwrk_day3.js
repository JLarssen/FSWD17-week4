var t;
var text='The weather is too warm for this time of year';
txt_arr= ['The weather is cold','The weather is moderate'];
t=getRandomTemperature();
if (t < 10){
    text=txt_arr[0];
    console.log(txt_arr[0]);
    console.log( document.querySelector('.img0'));
    document.querySelector('.img0').style.display="inline";
} else if (t < 22) {
    text=txt_arr[1];
    console.log(txt_arr[1]);
    console.log( document.querySelector('.img1'));
    document.querySelector('.img1').style.display="inline";
} else {    // too hot
    console.log( document.querySelector('.img2'));
    document.querySelector('.img2').style.display="inline";
    
}

document.getElementById('wetter_grad').innerHTML=t;
document.getElementById('wetter_txt').innerHTML=text;

function getRandomTemperature() {
    let r1=Math.ceil(Math.random() * 10);   // zahl zwischen 1 und 10
    let r2=Math.ceil(Math.random() * 10);
    let r3=Math.ceil(Math.random() * 10);
    t= r1+r2+r3;     // the randomfunction will very unlikely throw 3 high values, therefor not -5
    console.log(t, typeof(t));
    return(t)
}
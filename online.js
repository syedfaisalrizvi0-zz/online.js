//https://github.com/syedfaisalrizvi0/online.js
var spinnersrc;
var backgroundColorOff ='red';
var backgroundColorOnn ='green';
var msgOff  = 'Internet is not Connected';
var msgOnn  = 'Connected';
var msgCheck = 'Checking...';
var position  = 'top-right';
var defSrc = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KPHBhdGggZmlsbD0iIzQ0NDQ0NCIgZD0iTTkuOSAwLjJsLTAuMiAxYzMgMC44IDUuMyAzLjUgNS4zIDYuOCAwIDMuOS0zLjEgNy03IDdzLTctMy4xLTctN2MwLTMuMyAyLjMtNiA1LjMtNi44bC0wLjItMWMtMy41IDAuOS02LjEgNC4xLTYuMSA3LjggMCA0LjQgMy42IDggOCA4czgtMy42IDgtOGMwLTMuNy0yLjYtNi45LTYuMS03Ljh6Ij48L3BhdGg+Cjwvc3ZnPgo=';
var verifiedsrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCh4IDQ76d/lzAAACrklEQVRo3u2ZMWsUQRSAvztNzmCCInbJJaKJghERC7FRwSCioL2IhQgWNlp4LPgLbEyhBjGgjbUWYqsRzC9QIZJ4iXdnFPVSGEwgGDMWt7dZ93ZmZy/zzuZmmtudN+/7dvftsjcL7fafWyayvZkeh9lXWLYPPsw4ZdZQTvsSb7jJjiR4jnHn6HCvct6E72RCEF7rqxzXC9wXxysUrwPeln8rb5hVP+Q7l5yWIHRxlrd+9l8AZLjNb+Y5sR406gcs0OcUXm/dTKNQTAAZ7gXFOVIPeO/vuiqCBziF4gVdIXxN4WRt+Ke/Iy8mkOUxHRF8SKG+uU1MACDDWOxT4lhrBOLxCsVUKwT0eMU3eQETfo0r0gKNpRfGXwdZAQu8pIAVXk7AEi8lYI1PFrhGiVfsSYkfs8UnCRT80QqDEkefJFAITa1YnoWUeJNAITK9bKGQGq8XuBWT4hO7EvAprr1Z4IjmJXWOAbd4ncAFbapZjUKTeJ1ADzPadEX6m8IfpTdNDeT5qE0ZrQVT6Sk8AIZZiC9i/V2Qp2ilYIPvo4RKKwD9zGoTz/gn1Aa/kylUMwJmhWl6rfAw6W83IQC7KWsBH3hkKL0bQY7qRgRggDnDUSYdvQMBGOTzBvAOBGAolYIXme1AAIaYbxLvSAD2Wil4MTMdCdgoeLHznAnAPr6kxjsVMCl42jlOBeAgP4yPHXGBOAXPGO9cIKrgJUQLCIQVkvBCAnCASYpctogUErBvBoGsINaqtQVaI6BMAov+L7ki3BSsQC82Dmap+L/OiAmMkANgiWrc8B3/FpFarF7/j/UsPmB/sFxf5qLjC7GVc8FiuOK0LuxuyhfO5vpzvWcnL8Xx79huOlU5HvBHEP/U5tIe4iEl59/OvvIk/HmmsUU/XHbQ7bAIl1lxmK3dZNpf9QIiD0zm8vEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTAtMzBUMDg6MTM6MTQrMDA6MDCqsO7uAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEwLTMwVDA4OjEzOjE0KzAwOjAw2+1WUgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=';
var fidgetSrc  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCh4SKwzGFj3dAAADvUlEQVRIx5XUaWxVZRAG4Od28XaRQmnZwUpBAWspS0WNARQR2cJWBawGAiGuKGpAWRJIZE00RkJEghpZhCAIhChGoKAGaQslIhiL7NAibaFliTUIBPFHD5eCxcT5NXPmnffMfO98X0jdFtbdg9pLEesPJfbZ5nhdwFAd39qa5BlHbVes0hWJ0nXRyyELLL0VHFMHwSOqZDkG6gs77zJiDdbP567eroN4T+om2Qnb7EI/M2QJuyzsuK+9ivr6yxDvqE0O15RFBeUvKjVFPeXus06BTAe8I12UOHFyfCHGNMe9JFqVBxRap9mNPj50wqOR6A6TVel5y6jr7dQpEid6X6k2NcE4p7REnD7G6gJyVWhRi2CmPeoh2SCj3Aum+lksYacNQwf7FVml1CphzFSocVA+WplW6KXMNmtUmouQAmMYoFRIjL0mBs1tNhNR5jlnpfmKHNQJqcoNBE38Jhe58phqDbIciyjSWUXg3WWcN/UTDUb6JjJSru/Q2pkYYdVIddq1IFkuWcg1lMqX5FCgfaMIMRWSUS0+Sqk07NFe2yD5lB2u4WnHFFqh3CqpKPSEpFoY0pwk3UVNMMkRI2Sb6qyOGKPCUFFoZIVfJeEzO/X3kPlOSsUcC2C9TwPWAket1Q4NnKu1GSHfmo0or9njkE80xt0qtYNWTplxy7UaofCm+GEHb7kxaYoD3dDBAdsNkRJJT7D8JnhT1RE/WnvTVZoiWwco0lKc1+12ye8Wa4EcRTcRdLcf5PjRReWWyMQS42GX3ngcMTItVKa9eir1jZRH+cF0zHPEcKlo7R5sMQyWekPI2WDDeUsRhqsyWjRa2WC3BL2djCz3ShOFnKmRfqyvsNLbkRlLdEUf+1xQotoiSVhrQoCId1aGDBU1R99EtRS9nBAbANYbFXgtZEgI/GKPBN7z8jHLQpGCyciPyLLDINDDYhtMcycoMBgkOWmAeGW6XSfIVqmBjs7LQnPVkjBeuUmes9phKZjuY7DMWky0ubZMyyzBC0okGmcDmtc61o8sRoYyvOyghtKDhY9YslJj0Ee0ueYix6ZItqsSRLsqUaZWEv1kWk3q+rN+ziBbnbUBV8XiL3ERgniXEOWav/0iwTqHzfEv66HSK8i1BckqPBb8ZKOZyHYULeT7Uliddr9iyzV0QRsMVGWJ2fbKE8Yi78pw2tzgharTEvTFLFvFIs00HxguhJ7OaCrlhnT/ZbHybIysLQxVaUBd0NBtKOK851mr5ftTa0M0M9b3/4cA2hqpswSl8qx3pW7QP/1AFTcMwNinAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTEwLTMwVDE4OjQzOjEyKzAwOjAwJTiW4AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0xMC0zMFQxODo0MzoxMiswMDowMFRlLlwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC';
spinnersrc = defSrc;
function online(options,callback1 =function(){},callback2=function(){}){
    var noti = document.createElement('div');
    noti.setAttribute('id','snackbar');
    document.body.appendChild(noti)
 var style = document.createElement('style');
 style.innerHTML = `
 #snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    background-color:red;
    text-align: center;
    border-radius: 2px;
    padding: 0;
    position: fixed;
    z-index: 1;
    left: 50%;
    font-size: 17px;
    top:88%
  }
  
  #snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }
  #spinner{
    animation: rotation 2s infinite linear;
  }
  #snackbar.connected {
    visibility: visible;
    background-color:green;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }
  
  @-webkit-keyframes fadein {
    from { opacity: 0;} 
    to { opacity: 1;}
  }
  
  @keyframes fadein {
    from { opacity: 0;}
    to { opacity: 1;}
  }
  
  @-webkit-keyframes fadeout {
    from { opacity: 1;} 
    to { opacity: 0;}
  }
  
  @keyframes fadeout {
    from { opacity: 1;}
    to { opacity: 0;}
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  #overlay {
    background-color: #ccc; /*or semitransparent image*/
    opacity: 0.9;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
} 
 `
 document.head.appendChild(style);
 
 var notificationHtml = document.getElementById('snackbar');
 Object.keys(options).forEach((item)=>{
    console.log(item)
    if(item == 'backgroundColorOff'){
        backgroundColorOff = options[item];  
   }
   else if(item == 'backgroundColorOnn'){
    backgroundColorOnn  = options[item];
   }
   else if(item == 'spinner'){
     if(options[item] == 'circle'){
         spinnersrc = circleSrc
     }
     else if(options[item] == 'fidget'){
     spinnersrc = fidgetSrc;
   }
   else if(options[item].includes('png') || options[item].includes('jpeg')){
     spinnersrc = options[item];
   }
   else{
    spinnersrc = defSrc;
    }
 }
 else if(item == 'msgOff'){
   msgOff  = options[item];
 }
 else if(item == 'msgOnn'){
     msgOnn = options[item];
 }
 else if(item == 'msgCheck'){
  msgCheck = options[item];
 }
 else if(item == 'position'){
   if(options[item] == 'top-left'){
     notificationHtml.style.left = '8%';
     notificationHtml.style.top = '5%';
   }
   else if(options[item] == 'top-right'){
    notificationHtml.style.left = '90%';
    notificationHtml.style.top = '5%';
   }
   else if(options[item] == 'bottom-right'){
    notificationHtml.style.left = '90%';
    notificationHtml.style.top = '89%';
   }
   else if(options[item] == 'bottom-right'){
    notificationHtml.style.left = '8%';
    notificationHtml.style.top = '89%';
   }
   else{
      // 
   }
 }
 else if(item == 'game'){
 /*  var mask  = document.createElement('div');
   mask.setAttribute('id','overlay')
   document.body.appendChild(mask)
   var canvas = document.createElement('canvas');
   canvas.setAttribute('id','gameCanvas');
  document.getElementById('overlay').appendChild(canvas)
  var mycanvas = document.getElementById('gameCanvas');
  var ctx = mycanvas.getContext('2d');
  var snakeSize = 10; 
  var w = 350;
  var h = 350;
  var score = 0;
  var snake;
  var snakeSize = 10;
  var food;*/
 }
})
 var interval = setInterval(function(){
     if(navigator.onLine){
         if(hasClass(notificationHtml,'connected')){
          callback1();
          notificationHtml.className ='';
         }
         else{
             if(hasClass(notificationHtml,'show')){
                 notificationHtml.innerHTML = '<p><img src="'+verifiedsrc+'" height="23px" >&nbsp;&nbsp;&nbsp;&nbsp;"'+msgOnn+'"</p>'
                 notificationHtml.style.backgroundColor = backgroundColorOnn;
                 notificationHtml.className = 'connected';
             }
         }
     }
     else{
         if(hasClass(notificationHtml,'show')){
            notificationHtml.innerHTML = '<p><img src="'+spinnersrc+'"  id="spinner" >&nbsp;&nbsp;&nbsp;&nbsp;'+msgCheck+'</p>';
            notificationHtml.style.backgroundColor = backgroundColorOff;
         }
         else{
            notificationHtml.innerHTML = msgOff;
            notificationHtml.className = 'show';
            notificationHtml.style.backgroundColor = backgroundColorOff;
            callback2(); 
         }
     }
 },1000)
};
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}


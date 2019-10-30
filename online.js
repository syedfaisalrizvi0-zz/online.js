var spinnersrc = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KPHBhdGggZmlsbD0iIzQ0NDQ0NCIgZD0iTTkuOSAwLjJsLTAuMiAxYzMgMC44IDUuMyAzLjUgNS4zIDYuOCAwIDMuOS0zLjEgNy03IDdzLTctMy4xLTctN2MwLTMuMyAyLjMtNiA1LjMtNi44bC0wLjItMWMtMy41IDAuOS02LjEgNC4xLTYuMSA3LjggMCA0LjQgMy42IDggOCA4czgtMy42IDgtOGMwLTMuNy0yLjYtNi45LTYuMS03Ljh6Ij48L3BhdGg+Cjwvc3ZnPgo=';
var verifiedsrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCh4IDQ76d/lzAAACrklEQVRo3u2ZMWsUQRSAvztNzmCCInbJJaKJghERC7FRwSCioL2IhQgWNlp4LPgLbEyhBjGgjbUWYqsRzC9QIZJ4iXdnFPVSGEwgGDMWt7dZ93ZmZy/zzuZmmtudN+/7dvftsjcL7fafWyayvZkeh9lXWLYPPsw4ZdZQTvsSb7jJjiR4jnHn6HCvct6E72RCEF7rqxzXC9wXxysUrwPeln8rb5hVP+Q7l5yWIHRxlrd+9l8AZLjNb+Y5sR406gcs0OcUXm/dTKNQTAAZ7gXFOVIPeO/vuiqCBziF4gVdIXxN4WRt+Ke/Iy8mkOUxHRF8SKG+uU1MACDDWOxT4lhrBOLxCsVUKwT0eMU3eQETfo0r0gKNpRfGXwdZAQu8pIAVXk7AEi8lYI1PFrhGiVfsSYkfs8UnCRT80QqDEkefJFAITa1YnoWUeJNAITK9bKGQGq8XuBWT4hO7EvAprr1Z4IjmJXWOAbd4ncAFbapZjUKTeJ1ADzPadEX6m8IfpTdNDeT5qE0ZrQVT6Sk8AIZZiC9i/V2Qp2ilYIPvo4RKKwD9zGoTz/gn1Aa/kylUMwJmhWl6rfAw6W83IQC7KWsBH3hkKL0bQY7qRgRggDnDUSYdvQMBGOTzBvAOBGAolYIXme1AAIaYbxLvSAD2Wil4MTMdCdgoeLHznAnAPr6kxjsVMCl42jlOBeAgP4yPHXGBOAXPGO9cIKrgJUQLCIQVkvBCAnCASYpctogUErBvBoGsINaqtQVaI6BMAov+L7ki3BSsQC82Dmap+L/OiAmMkANgiWrc8B3/FpFarF7/j/UsPmB/sFxf5qLjC7GVc8FiuOK0LuxuyhfO5vpzvWcnL8Xx79huOlU5HvBHEP/U5tIe4iEl59/OvvIk/HmmsUU/XHbQ7bAIl1lxmK3dZNpf9QIiD0zm8vEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTAtMzBUMDg6MTM6MTQrMDA6MDCqsO7uAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEwLTMwVDA4OjEzOjE0KzAwOjAw2+1WUgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=';
function online(callback1 =function(){},callback2=function(){}){
    var noti = document.createElement('div');
    noti.setAttribute('id','snackbar');
    noti.innerHTML = `Hello`;
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
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
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
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
  }
  
  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }
  
  @-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 0; opacity: 0;}
  }
  
  @keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
 `
 document.head.appendChild(style);
 var notificationHtml = document.getElementById('snackbar');
 var interval = setInterval(function(){
     if(navigator.onLine){
         if(hasClass(notificationHtml,'connected')){
          callback1();
          notificationHtml.className ='';
         }
         else{
             if(hasClass(notificationHtml,'show')){
                 notificationHtml.innerHTML = '<p><img src="'+verifiedsrc+'" height="23px" >&nbsp;&nbsp;&nbsp;&nbsp;Connected</p>'
                notificationHtml.className = 'connected';
             }
         }
     }
     else{
         if(hasClass(notificationHtml,'show')){
            notificationHtml.innerHTML = '<p><img src="'+spinnersrc+'"  id="spinner" >&nbsp;&nbsp;&nbsp;&nbsp;Checking....</p>';
         }
         else{
            notificationHtml.innerHTML = 'Internet is not Connected';
            notificationHtml.className = 'show';
            callback2(); 
         }
     }
 },1000)
};
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

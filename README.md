# online.js
an library with zero Dependencies to controll when user lost the internet connection and get back it 

1) Library has  separate callback function for when user lost connection and when got back it
online((e)=>{
    //do when connection on
    console.log('connection is on');
},(e)=>{
    //do when connection is down 
    console.log('connection is off');
}); 
2) It has many  predefind costomization options 
online({
    backgroundColorOff:'yellow',
    backgroundColorOnn:'red',
    msgOff: 'foo', //controll Massege  when user lost connection
    msgOnn: 'bar', // controll Massege  when user get connection
    msgCheck: 'string', //controll Massege  retry connection
    position : 'top-left' //many positions top-left,top-down,bottom-left,bottom-down
},(e)=>{
    //do when connection on
    console.log('connection is on');
},(e)=>{
    //do when connection is down 
    console.log('connection is off');
}); 
3) callbacks returns notification Html dom object , you  can do  whatever you want to do

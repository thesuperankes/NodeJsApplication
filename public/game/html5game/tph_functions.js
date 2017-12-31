function connect(){
var socket = io.connect('http://192.168.0.19:3000');
var data = {
	id:Math.round(Math.random())
}
socket.emit('start',data);
}

function msg(data){
	alert(data);
}
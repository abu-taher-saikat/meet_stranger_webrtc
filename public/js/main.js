const socket = io("/")



socket.on("connect",()=>{
    console.log('Successfull connected to ws server');
    console.log(socket);
})
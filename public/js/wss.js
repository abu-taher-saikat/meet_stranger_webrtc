import * as store from './store.js';
import * as ui from './ui.js';


export const regiserSocketEvents = (socket) => {    
    socket.on("connect",()=>{
        console.log('Successfull connected to ws server');
        store.setSocketId(socket.id)
        ui.updatePersonalCode(socket.id)
    })
}

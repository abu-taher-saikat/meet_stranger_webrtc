let state = {
    socketId : null,
    localStream : null,
    remoteStream : null, 
    screenSharingStream : null,
    allowConnectonsFromStranger : false,
    screenSharingActive : false
}


export const setSocketId = (socketId)=>{
    state = {
        ...state,
        socketId 
    };
    console.log(state.socketId);
}
export const setLocalStream = (stream)=>{
    state = {
        ...state,
        localStream : stream 
    }
}
export const setAllowConnectionsFromStrangers = (allowConnection)=>{
    state = {
        ...state,
        allowConnectonsFromStranger : allowConnection 
    }
}

export const setScreenSharingActive = (screnSharingActive)=>{
    state = {
        ...state,
        screenSharingActive : screnSharingActive 
    }
}

export const setScreenSharingStream = (stream)=>{
    state = {
        ...state,
        screenSharingStream : stream 
    }
}

export const setRemoteStream = (stream)=>{
    state = {
        ...state,
        remoteStream : stream 
    }
}


export const getState = () => {
    return state;
}
const defaultstate = {
    num:0
}

export default function (state=defaultstate,action) {
    if (action.type==='add') {
       return Object.assign(state,{
           num:state.num+1
       }) 
    }else if(action.type==='sub'){
        return Object.assign(state,{
            num:state.num-1
        }) 
    }else{
        return state
    }
}
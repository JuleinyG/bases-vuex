


export const  increment = ( state ) => {
    state.count++
    state.lasMutation = 'increment'
}

export const incrementBy = ( state, val) => {
    state.count += val
    state.lasMutation = 'incrementBy ' + val
    state.lastRandomInt = val
}

export const setLoading = ( state, val ) => {
    state.isLoading = val 
    state.lasMutation = 'setLoading ' + val

}
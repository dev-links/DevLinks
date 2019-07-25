import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) =>{
    dispatch({ type: "LOADING_UI"})
    axios
        .post('/login', userData)
        .then(res =>{
            setAuthHeader(res.data.token)
            dispatch(getUserData());
            dispatch({ type: "CLEAR_ERRORS"})
            history.push("/client-dashboard")
        })
        .catch(err =>{
            dispatch({
                type: "SET_ERRORS",
                payload: err.response.data
            })
        })
}

export const getUserData = () => (dispatch) =>{
    dispatch({ type: 'LOADING_USER'})
    axios.get('/user')
        .then(res => {
            dispatch({
                type : "SET_USER",
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const registerUser = (newUserData, history) => (dispatch) =>{
    dispatch({ type: "LOADING_UI"})
    axios
        .post('/signUp', newUserData)
        .then(res =>{
            setAuthHeader(res.data.token)
            dispatch(getUserData());
            dispatch({ type: "CLEAR_ERRORS"})
            history.push("/client-dashboard")
        })
        .catch(err =>{
            dispatch({
                type: "SET_ERRORS",
                payload: err.response.data
            })
        })
}

const setAuthHeader =(token) =>{
    const FBIdToken = `Bearer ${token}`
            localStorage.setItem('FBIdToken', FBIdToken)
            axios.defaults.headers.common['Authorization'] = FBIdToken;
}

export const logOutUser = () => (dispatch) =>{
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: 'SET_UNAUTHENTICATED'})
    return console.log('Logged out successfully')
}

export const editUserDetails = (userDetails) => (dispatch) =>{
    dispatch({type: 'LOADING_USER'})
    axios.post('/user', userDetails)
        .then(() => {
            dispatch(getUserData())
        })
        .catch(err => console.log(err))
}
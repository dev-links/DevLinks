const initialState ={
    feeds: [],
    feed: {},
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case 'LOADING_DATA':
            return{
                ...state,
                loading: true
            }

            case "POST_FEED":
            return{
                ...state,
                feeds : [
                    action.payload,
                    ...state.feeds
                ]
            }

            default:
                return state
    }
}
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQAj4KnwtD0QvuBCc0DkcLMR4ofy94SIm888qYa1K_-s9dTqMnMC0lVeBlPregAqCt2ouq5x77D78fBI6E6pbAM69Jel-pnK-sRXwkGCmIdKQKAd1k5CTvdXXyBb5qZT',

};


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
                
            }
            case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token
                }

                case 'SET_PLAYLISTS':
                    return {
                        ...state,
                        playlists: action.playlists
                    };

                    case 'SET_DISCOVER_WEEKLY':
                        return {
                            ...state,
                            discover_weekly: action.discover_weekly,
                        }

            default:
                return state;
    }
};

export default reducer;

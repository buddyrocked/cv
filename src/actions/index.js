import axios from 'axios';

export const FETCH_HOME         = 'fetch_home';
export const FETCH_PROFILE      = 'fetch_profile';
export const FETCH_SKILL        = 'fetch_skill';
export const FETCH_PORTFOLIO    = 'fetch_portfolio';
export const CREATE_CONTACT     = 'create_contact';

const ROOT_URL = `https://raw.githubusercontent.com/buddyrocked/cv/master/`;

export const fetchHome = () => async(dispatch, getState) => {
    try {
        let request = await axios.get(`${ROOT_URL}src/data/home.json`);
        dispatch({ type: FETCH_HOME, payload: request });
    }catch(e){
        console.log(e)
    }
}

export const fetchProfile = () => async(dispatch, getState) => {
    try {
        let request = await axios.get(`${ROOT_URL}src/data/profile.json`);
        dispatch({ type: FETCH_PORTFOLIO, payload: request });
    }catch(e){
        console.log(e)
    }
}

export const fetchSkill = () => async(dispatch, getState) => {
    try {
        let request = await axios.get(`${ROOT_URL}src/data/skill.json`);
        dispatch({ type: FETCH_SKILL, payload: request });
    }catch(e){
        console.log(e)
    }
}

export const fetchPortfolio = () => async(dispatch, getState) => {
    try {
        let request = await axios.get(`${ROOT_URL}src/data/portfolio.json`);
        dispatch({ type: FETCH_PORTFOLIO, payload: request });
    }catch(e){
        console.log(e)
    }
}


export const createContact = (values, callback) => async (dispatch, getState) => {
    try {
        await axios.post(`${ROOT_URL}src/data/contact.json`, values)
        .then((responseJson) => {
            dispatch({type: CREATE_CONTACT, payload: responseJson});
            callback();
        });
    }catch(e){
        console.log(e)
    }
}
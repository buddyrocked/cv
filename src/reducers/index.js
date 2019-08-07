import { combineReducers } from 'redux';
import HomeReducer from './reducer_home';
import ProfileReducer from './reducer_profile';
import SkillReducer from './reducer_skill';
import PortfolioReducer from './reducer_portfolio';
import ContactReducer from './reducer_contact';

const rootReducer = combineReducers({
    home: HomeReducer,
    profile: ProfileReducer,
    skill: SkillReducer,
    portfolio: PortfolioReducer,
    contact: ContactReducer
});

export default rootReducer;

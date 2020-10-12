import { combineReducers } from 'redux';
import entitiesReduser from './entities';

export default combineReducers({
  entities: entitiesReduser,
});

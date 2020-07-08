import { FETCH_STORIES, UPVOTE_STORY, HIDE_STORY } from '../actions';
import {updateState, updateVoteInlocalStorage, takePointsfromLocal, hideInlocalStorage, hideStory, hiddenStoryFromLocal} from './helper';

export default (state = {}, action) => {
    switch (action.type){
        case FETCH_STORIES:
            if (action.env === "client"){
                return {...action.payload.data};
            }else{
                return {...action.payload.data}
            }
     	case UPVOTE_STORY:
     		updateVoteInlocalStorage(action.payload)
     		return (updateState(state, action.payload))

        case HIDE_STORY:
            hideInlocalStorage(action.payload)
            return (hideStory(state, action.payload))
        default:
            return state
    }
}




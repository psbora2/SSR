import axios from 'axios';

export const FETCH_STORIES = 'FETCH_STORIES';
export const UPVOTE_STORY = 'UPVOTE_STORY';
export const HIDE_STORY = 'HIDE_STORY';

export const fetchStories = (page, env = "client") => async dispatch => {
	page = page ? page : 0
    const res = await axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&&page='+page)
    dispatch({
        type: FETCH_STORIES,
        payload: res,
        env: env
    })
}

export const upVote = (data) =>  dispatch => {
	dispatch({
		type: UPVOTE_STORY,
		payload: data
	})
}

export const hideStory = (data) =>  dispatch => {
	dispatch({
		type: HIDE_STORY,
		payload: data
	})
}
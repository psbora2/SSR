export const updateState = (state, payload) => {
	var objIndex = state.hits.findIndex((obj => obj.objectID == payload.id));
	if(objIndex){
		state.hits[objIndex] = {...state.hits[objIndex], points: parseInt(state.hits[objIndex].points) + 1 }
	}
    const newState = Object.assign({}, state, { modalOpen: true });
	return newState
} 


export const updateVoteInlocalStorage = (payload) => {

    if ('localStorage' in window) {
        let pointForTheStory = localStorage.getItem(payload.id) || 0

        if (pointForTheStory !== undefined) {
            if (pointForTheStory === 'true') {
                pointForTheStory = 1
            }
            ++pointForTheStory
        }
        localStorage.setItem(payload.id, pointForTheStory)
    }
}

export const takePointsfromLocal = (story) => {
    if ('localStorage' in window) {
        if(story && localStorage.getItem(story.objectID)){
            return {...story, points: localStorage.getItem(story.objectID)}
        }else{
            return story
        }
    } else{
        return story
    }
}

export const hiddenStoryFromLocal = (story) => {
    if ('localStorage' in window) {
        if(story && localStorage.getItem("hide"+story.objectID)){
            return {...story, isHidden:true}
        }else{
            return story
        }
    } else{
        return story
    }
}

export const hideStory = (state, payload) => {
    var objIndex = state.hits.findIndex((obj => obj.objectID == payload.id));
    if(objIndex){
        state.hits[objIndex] = {...state.hits[objIndex], isHidden:true}
    }
    const newState = Object.assign({}, state, { modalOpen: true });
    return newState
}


export const hideInlocalStorage = (payload) => {
    if ('localStorage' in window) {
        localStorage.setItem("hide"+payload.id, true)
    }
}
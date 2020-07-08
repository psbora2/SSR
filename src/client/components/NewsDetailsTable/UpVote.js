import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { upVote } from '../../actions'


const UpVote = ({ data, upVote }) => {
    const handelClick = (id) => {
        upVote({ id: id })
    }
    return (
        <center>
            <div
                className={`votearrow`}
                title="upvote"
                role="button"
                aria-pressed="false"
                onClick={() => handelClick(data.objectID)}
            ></div>
        </center>
    )
}

export default connect(null, {upVote})(UpVote)

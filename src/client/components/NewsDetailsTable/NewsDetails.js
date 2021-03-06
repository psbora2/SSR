import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hideStory } from '../../actions';
import { getHostName, getRelativeTime } from '../../../helpers/helper'

const NewsDetails = ({ data, hideStory }) => {
    const handelHideClick = (id) => {
        hideStory({id: id})
    }

    return (
        <div className="hn_details">
            <span className="hn_title">{`${data.title}`}</span>
            <span className="hn_url">
                {data.url && (
                    <span>
                        {` (`}
                        <a href={data.url}>
                            <b>{`${getHostName(data.url)}`}</b>
                        </a>
                        {`)`}
                    </span>
                )}
            </span>{' '}
            <span className="hn_author">
                {`by`} <b>{data.author}</b>
            </span>{' '}
            <span className="hn_time">{`${getRelativeTime(
                data.created_at
            )}`}</span>{' '}
            <span className="hn_hide">
                {`[`} <a onClick={() => handelHideClick(data.objectID)}>hide</a>{' '}
                {`]`}
            </span>
            <div className="nb_display_mobile">
                <span>
                    <b>Comments:</b> {data.num_comments}
                </span>
                {` | `}
                <span>
                    <b>Votes:</b> {data.points}
                </span>
            </div>
        </div>
    )
}

export default connect(null, {hideStory})(NewsDetails)

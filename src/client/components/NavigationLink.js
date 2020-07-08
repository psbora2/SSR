import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = ({ page, nbPages }) => {
	page = parseInt(page)
    const nextPage = page + 1
    const prevPage = page - 1
    const nextShowCondition = nbPages - 1 > page


    return (
        <div>
            {!!page && <Link to={`/${prevPage}`}>Previous</Link>}
            {` | `}
            {!!nextShowCondition && <Link to={`/${nextPage}`}>Next</Link>}
        </div>
    )
}

export default NavigationLink
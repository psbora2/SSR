import React from 'react';
import { connect } from "react-redux";
import Table from "../components/StorieList";
import { fetchStories } from "../actions";
import { header } from '../components/NewsDetailsTable/TableHeaderDetails';
import NavigationLink from "./NavigationLink";
import LineChart from './LineChart';
import "../styles/style.scss";



class HomePage extends React.Component {
    constructor(props){
        super(props)
    }

    fetchPage(props){
        if(props.page){
            props.fetchStories(props.page)
        }else{
            props.fetchStories()
        }
    }

    componentDidMount(){
        this.fetchPage(this.props)  
    }

    componentDidUpdate(prevProps){
        if(this.props.page !== prevProps.page){
            this.fetchPage(this.props)
        }
    }

	render(){
		const { stories } = this.props
		const rows = stories.hits ? stories.hits : []
        const nbPages = stories.nbPages ? stories.nbPages : 1
        const page = this.props.page ? this.props.page : 0

        const labels = stories.hits.map((story) => {return story.objectID})
        const data = stories.hits.map((story) => {return story.points})

		return(<div role="heading" aria-level="1">
                    <Table rows = {rows} header = {header}/>
                    <div className="hn_page_navigation">
                        <NavigationLink page = {page} nbPages= {nbPages} />
                    </div>
                    <LineChart labels={labels} data={data} />
                </div>)
	}
}

function mapStateToProps(state, ownProps) {
    const page = ownProps.match.params.page ? ownProps.match.params.page  : 0
    return {
        stories: state.stories,
        page: page
    };
}

function loadData(store, route){
    var match = route["match"]
    route = route["route"]
    const page = match.params.page ? match.params.page  : 0
    return store.dispatch(fetchStories(page, "server"))
}

export { loadData };

export default connect(mapStateToProps, {fetchStories})(HomePage)
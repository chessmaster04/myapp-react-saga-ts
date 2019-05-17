import React from 'react';
import { bindActionCreators } from 'redux';
import connect from '../../connect';
// import { connect } from 'react-redux';
import { State } from '../../redux/reducers/index';
import { getNews } from "../../redux/actions/newsActions";

type Props = {
    news: object[],
    actions: any
}

function mapStateToProps(state: State) {
    return {
        news: state.news,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators({ getNews }, dispatch)
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class News extends React.Component<Props> {
    componentDidMount() {
        this.props.actions.getNews();
    }
    render() {
        return (
            <>
                News
            </>
        )
    }
}
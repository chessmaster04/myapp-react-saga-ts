import React, { ReactElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from '../../utils';
// import { connect } from 'react-redux';
import { State } from '../../redux/reducers/index';
import { getNews } from "../../redux/actions/newsActions";
import { NewsEntity } from "../../model";

type Props = {
    news: object[],
    actions: any
}

function mapStateToProps(state: State) {
    return {
        news: state.news.news,
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
        console.log(this.props.news);
        const news: NewsEntity[] | any = this.props.news;
        return (
            <>
                <h2>News</h2>
                {Array.isArray(news) && news.map((item: NewsEntity): ReactElement => {
                    return <span key={item.id}>{item.title}</span>
                })}
            </>
        )
    }
}
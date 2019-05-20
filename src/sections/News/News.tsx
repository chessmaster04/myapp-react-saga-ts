import React, { ReactElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from '../../utils';
// import { connect } from 'react-redux';
import { State } from '../../redux/reducers/index';
import { getNews, delNewsItem } from "../../redux/actions/newsActions";
import { NewsEntity } from "../../model";
import NewsItem from "./components/NewsItem";

export type Props = {
    news: object[] | null,
    actions: any | object
}

function mapStateToProps(state: State) {
    return {
        news: state.news.news,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators({ getNews, delNewsItem }, dispatch)
    };
}

export class News extends React.Component<Props> {
    componentDidMount() {
        this.props.actions.getNews();
    }
    render() {
        const onDel = this.props.actions.delNewsItem;
        const news: NewsEntity[] | any = this.props.news;
        return (
            <>
                <h2>News</h2>
                {Array.isArray(news) && news.map((data: NewsEntity): ReactElement => {
                    return <NewsItem {...{ data, onDel, key: data.id }} />
                })}
            </>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(News);
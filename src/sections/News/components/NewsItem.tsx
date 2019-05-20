import React, { ReactElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from '../../../utils';
// import { connect } from 'react-redux';
import { State } from '../../../redux/reducers/index';
// import { getNews } from "../../../redux/actions/newsActions";
import { NewsEntity } from "../../../model";

type Props = {
    data: NewsEntity,
    onDel: any,
}

function mapStateToProps(state: State) {
    return {};
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class NewsItem extends React.PureComponent<Props> {
    render() {
        const { data, onDel } = this.props;
        return (
            <div>
                <span>#{data.id}</span>
                <span>{data.title}</span>
                <button onClick={onDel.bind(null, data.id)}>del</button>
            </div>
        )
    }
}
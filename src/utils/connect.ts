import { connect } from 'react-redux';

export default (mapStateToProps: any, mapDispatchToProps: Function) => {
    return function (target: any) {
        return connect(mapStateToProps, mapDispatchToProps)(target) as any;
    }
}
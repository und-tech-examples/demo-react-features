import * as React from 'react';
import { connect } from 'react-redux';
import { CardList } from './CardList';
import * as userSelect from '../../state/user/selectors'
import { fetchUser, like } from '../../state/user/actions';

interface Props {
    isFetching?: boolean;
    fetch?: Function;
}

class Container extends React.Component<Props> {
    componentWillMount() {
        this.props.fetch();
    }
    render(): JSX.Element {
        const { isFetching, ...nextProps } = this.props;
        console.log('nextProps>', nextProps);
        if(isFetching) {
            return <div>cargando...</div>
        }
        return <CardList {...nextProps} />
    }
}
const mapStateToProps = state => ({
    data: userSelect.getData(state), // userSelect.getUser(index);
    isFetching: userSelect.getIsFetching(state)
});

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchUser()),
    handleLike: index => dispatch(like(index))
});

export const CardListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
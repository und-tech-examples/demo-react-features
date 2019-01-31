import * as React from 'react';
import { connect } from 'react-redux';
import { CardList } from './UserList';
import * as selectUser from '../../state/user/selectors'
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
        if(isFetching) {
            return <div>cargando...</div>
        }
        return <CardList {...nextProps} />
    }
}

const mapStateToProps = state => ({
    data: selectUser.getList(state),
    isFetching: selectUser.getIsFetching(state)
});

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchUser()),
    handleLike: index => dispatch(like(index))
});

export const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
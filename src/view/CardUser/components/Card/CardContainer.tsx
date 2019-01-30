import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from './Card';
import { PlaceholderShimmer } from './styled';
import * as userSelect from '../../state/user/selectors';
import { fetchUser, toogleFollow, like, unlike } from '../../state/user/actions';
import { user } from '../../state/user/reducer';

interface Props {
    fetch: any;
    isFetching: any;
}

class Container extends React.Component<Props, {}> {
    render(): JSX.Element {
        const { isFetching, ...nextProps } = this.props;
        if(isFetching) {
            return <PlaceholderShimmer />
        }
        return <Card {...nextProps} />
    }
}

const mapStateToProps = (state, ownerProps) => ({
    data: userSelect.getUser(state)(ownerProps.index),
    isFetching: userSelect.getIsFetching(state),
})

const mapDispatchToProps = dispatch => ({
    handleLike: (uuid: string) => dispatch(like(uuid)),
    handleUnlike: (uuid: string) => dispatch(unlike(uuid)),
    handleFollow: (uuid: string) => dispatch(toogleFollow(uuid))
});

export const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)

// map -> <CardContainer index={uuid}/>

import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from './Card';
import { PlaceholderShimmer } from './styled';
import * as selectUser from '../../state/user/selectors';
import { toogleFollow, like, unlike } from '../../state/user/actions';

const mapStateToProps = (state, ownerProps) => ({
    user: selectUser.getUser(state)(ownerProps.index),
});

const mapDispatchToProps = dispatch => ({
    handleLike: (uuid: string) => dispatch(like(uuid)),
    handleUnlike: (uuid: string) => dispatch(unlike(uuid)),
    handleFollow: (uuid: string) => dispatch(toogleFollow(uuid))
});

export const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)

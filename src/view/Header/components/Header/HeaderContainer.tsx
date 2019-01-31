import { connect } from 'react-redux';
import { selectUser } from '../../../userList';
import { Header } from './Header';

const mapStateToProps = state => ({
    totalFollowing: selectUser.getTotalFollowing(state)
});

export const HeaderContainer = connect(
    mapStateToProps
)(Header)
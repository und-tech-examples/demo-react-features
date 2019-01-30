import { connect } from 'react-redux';
import { userSelect } from '../../../CardUser';
import { Header } from './Header';

const mapStateToProps = state => ({
    totalFollowing: userSelect.getTotalFollowing(state)
});

export const HeaderContainer = connect(
    mapStateToProps
)(Header)
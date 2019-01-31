import * as React from 'react';
import Icon from 'react-icons-kit';
import { thumbsOUp } from 'react-icons-kit/fa/thumbsOUp'
import { thumbsODown } from 'react-icons-kit/fa/thumbsODown'
import { UserModel } from '../../model/UserModel';

import {
    Wrapper,
    Avatar,
    Line,
    Title,
    Subtitle,
    ButtonIcon,
    FotterButton,
    ButtonFollow
} from './styled';

interface Props {
    handleFollow?: Function;
    handleLike?: Function;
    handleUnlike?: Function;
    user?: UserModel;
}

export const Card: React.SFC<Props> = ({
    user: {
        name,
        email,
        phone,
        uuid,
        picture,
        like,
        unlike,
        following
    },
    handleLike,
    handleFollow,
    handleUnlike
}) => (
    <Wrapper>
        <Avatar src={picture} />
        <Line />
        <Title>{name}</Title>
        <Subtitle>{email}</Subtitle>
        <Subtitle>{phone}</Subtitle>
        <FotterButton>
            <ButtonIcon onClick={() => {
                handleLike(uuid);
            }}>
                <Icon icon={thumbsOUp} size={32} style={{color: '#465572'}} />
                {like}
            </ButtonIcon>
            <ButtonIcon onClick={() => {
                handleUnlike(uuid);
            }}>
                <Icon icon={thumbsODown} size={32} />
                {unlike}
            </ButtonIcon>
        </FotterButton>
        <ButtonFollow following={following} onClick={() => {
            handleFollow(uuid);
        }}>{following ? 'FOLLOWING' : 'FOLLOW' }</ButtonFollow>
    </Wrapper>
)

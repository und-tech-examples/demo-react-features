import * as React from 'react';
import Icon from 'react-icons-kit';
import { thumbsOUp } from 'react-icons-kit/fa/thumbsOUp'
import { thumbsODown } from 'react-icons-kit/fa/thumbsODown'
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
    name?: string;
    email?: string;
    phone?: string;
    picture?: string;
    following?: boolean;
    handleFollow?: Function;
    handleLike?: Function;
    handleUnlike?: Function;
    like?: number;
    unlike?: number;
    index?: number;
    data?: any;
}

export const Card: React.SFC<Props> = ({
    data,
    handleLike,
    handleFollow,
    handleUnlike
}) => (
    <Wrapper>
        <Avatar src={data.picture} />
        <Line />
        <Title>{data.name}</Title>
        <Subtitle>{data.email}</Subtitle>
        <Subtitle>{data.phone}</Subtitle>
        <FotterButton>
            <ButtonIcon onClick={() => {
                console.log('index', data.uuid);
                handleLike(data.uuid);
            }}>
                <Icon icon={thumbsOUp} size={32} style={{color: '#465572'}} />
                {data.like}
            </ButtonIcon>
            <ButtonIcon onClick={() => {
                handleUnlike(data.uuid);
            }}>
                <Icon icon={thumbsODown} size={32} />
                {data.unlike}
            </ButtonIcon>
        </FotterButton>
        <ButtonFollow following={data.following} onClick={() => {
            handleFollow(data.uuid);
        }}>{data.following ? 'FOLLOWING' : 'FOLLOW' }</ButtonFollow>
    </Wrapper>
)

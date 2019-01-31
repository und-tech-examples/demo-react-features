import * as React from 'react';
import { Wrapper } from './styled';
import { CardContainer } from '../Card';
import { UserListModel } from '../../model/UserModel';

interface Props {
    data?: UserListModel;
}

export const CardList: React.SFC<Props> = ({ data }) => (
    <Wrapper>
        {Object.keys(data).map((key) => (
            <CardContainer
                key={data[key].uuid}
                {...data[key]}
                index={data[key].uuid}
            />
        ))}
    </Wrapper>
)

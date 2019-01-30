import * as React from 'react';

import { 
    Wrapper,
    InnerWrapper,
    Title
} from './styled';

export const Header = ({
    totalFollowing
}) => (
    <Wrapper>
        <InnerWrapper>
            <Title>FOLLOWING {totalFollowing}</Title>
        </InnerWrapper>
    </Wrapper>
)
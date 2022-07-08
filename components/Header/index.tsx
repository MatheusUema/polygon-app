import React from 'react';

import { HeaderIcon } from '../HeaderIcon';
import { HeaderContainer } from './styles';

export const Header = (): JSX.Element => {

  return (
    <HeaderContainer>
      <HeaderIcon />
      <h1>Polygon App</h1>
    </HeaderContainer>
  )
};
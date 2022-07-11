import React from 'react';

import { HeaderIcon } from '../HeaderIcon';
import { HeaderContainer } from './styles';

export const Header = (): JSX.Element => {

  return (
    <HeaderContainer>
      <HeaderIcon />
      <h1>Ingress Project</h1>
    </HeaderContainer>
  )
};
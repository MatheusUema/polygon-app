import React from 'react';

import Head from 'next/head';
import { Container } from './styles';

interface IAppContainerProps {
    children: React.ReactNode;
}

export const AppContainer = ({children}: IAppContainerProps): JSX.Element => {

  return (
    <Container>
        <Head>
            <title>Polygon App</title>
            <link rel="icon" type="image/png" href="https://www.iconpacks.net/icons/1/free-bar-chart-icon-676-thumb.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            <meta charSet='utf-8'/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <style >{`
                html, * {
                    margin: 0;
                }
            `}</style>
        </Head>
        {children}
    </Container>
  )
};

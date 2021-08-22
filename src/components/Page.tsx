import { ThemeProvider, CssBaseline, Container } from '@material-ui/core';
import { ReactNode } from 'react';
import defaultTheme from '../defaultTheme';
import GNB from './GNB';

type PageProps = {
    content: ReactNode;
};

const Page = ({ content }: PageProps): JSX.Element => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline>
                <GNB />
                <Container maxWidth='lg' style={{paddingTop: 60}}>
                    {content}
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
};

export default Page;
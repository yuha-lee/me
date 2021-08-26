import { ThemeProvider, CssBaseline, Container } from '@material-ui/core';
import { ReactNode } from 'react';
import defaultTheme from '../defaultTheme';
import GNB from './GNB';
import Footer from './Footer';
import FloatingMenu from './FloatingMenu';

type PageProps = {
    content: ReactNode;
};

const Page = ({ content }: PageProps): JSX.Element => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline>
                <GNB />
                <Container maxWidth='lg' style={{paddingTop: 85, paddingBottom: 60}}>
                    {content}
                    <FloatingMenu />
                </Container>
                <Footer />
            </CssBaseline>
        </ThemeProvider>
    );
};

export default Page;
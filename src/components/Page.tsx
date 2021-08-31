import { ThemeProvider, CssBaseline, Container, Box } from '@material-ui/core';
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
                {content}
            </CssBaseline>
        </ThemeProvider>
    );
};

export default Page;
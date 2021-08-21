import ReactDOM from 'react-dom';
import { Typography, ThemeProvider } from '@material-ui/core';
import defaultTheme from './defaultTheme';

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Typography variant='h1' color='secondary'>hello world</Typography>
        </ThemeProvider>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
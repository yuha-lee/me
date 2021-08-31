import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, Box, makeStyles } from '@material-ui/core';
import RoundButton from './RoundButton';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'sticky',
        bottom: 'inherit',
        left: 0,
        top: 0,
        width: '100%',
        padding: '15px 0',
        animation: '1s ease 0s 1 normal none running down'
    },
    '@global': {
        '@keyframes down': {
            '0%': {
                transform: 'translateY(-100px)'
            }
        }
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        '& button': {
            marginLeft: 'auto'
        }
    }
}));

const GNB = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth='lg' className={classes.container}>
                <RoundButton icon={faBars} />
            </Container>
        </Box>
    );
};

export default GNB;
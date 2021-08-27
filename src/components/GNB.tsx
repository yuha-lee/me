import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, Box, makeStyles } from '@material-ui/core';
import Logo from './Logo';
import BarMenu from './BarMenu';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: 'inherit',
        left: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '& h4, & h6': {
            color: theme.palette.common.white
        },
        padding: '5px 0',
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
        gap: 20
    },
    btns: {
        marginLeft: 'auto',
        '& svg': {
            marginLeft: 20
        }
    }
}));

const GNB = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth='lg' className={classes.container}>
                <Logo />
                <Box className={classes.btns}>
                    <BarMenu />                    
                </Box>
            </Container>
        </Box>
    );
};

export default GNB;
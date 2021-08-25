import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '& svg, & span': {
            color: theme.palette.grey['A400']
        },
        height: 45,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: 10,
        textAlign: 'center',
        animation: '1s ease 0s 1 normal none running up'
    },
    '@global': {
        '@keyframes up': {
            '0%': {
                transform: 'translateY(100px)'
            }
        }
    },
}));

const Footer = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth='lg'>
                <FontAwesomeIcon icon={faCopyright} />
                <Typography variant='body2' component='span'> YUHA LEE</Typography>
            </Container>
        </Box>
    );
};

export default Footer;
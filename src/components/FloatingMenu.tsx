import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        left: -43,
        bottom: '15%',
        position: 'fixed',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '9px 20px 9px 15px',
        backgroundColor: theme.palette.text.secondary,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        color: theme.palette.common.black,
        transitionDuration: '0.5s',
        transitionProperty: 'left',
        '& svg': {
            cursor: 'pointer'
        },
        '&:hover': {
            left: 0
        }
    }
}));

const FloatingMenu = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <FontAwesomeIcon icon={faGithub} size='2x' onClick={() => window.open('https://github.com/yuha-lee', '_blank')} />
            <FontAwesomeIcon icon={faLinkedin} size='2x' onClick={() => window.open('https://www.linkedin.com/in/yuhalee1216', '_blank')} />
        </Box>
    )
};

export default FloatingMenu;
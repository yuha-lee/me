import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Box, CardMedia, makeStyles, Typography } from '@material-ui/core';
import RoundButton from './RoundButton';
import Divider from './Divider';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 25,
        minHeight: 'calc(100vh - 200px)',
        userSelect: 'none',
        color: '#a1a9c5'
    },
    photo: {
        boxShadow: '3px 3px 4px 0 rgb(0 0 0 / 20%), -3px -3px 4px 0 rgb(255 255 255 / 50%)',
        maxWidth: 200,
        width: '40vw',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.25))'
    },
    textWrapper: {
        textAlign: 'center',
        '& h4': {
            lineHeight: 1
        },
        maxWidth: 1280,
        width: '90%'
    },
    buttons: {
        display: 'flex',
        gap: 15
    }
}));

const Index = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <CardMedia component='img' src='/resources/me.png' className={classes.photo} />
            <Box className={classes.textWrapper}>
                <Typography variant='h4'>YUHA LEE</Typography>
                <Typography variant='subtitle2' color='textSecondary'>FRONTEND DEVELOPER</Typography>
            </Box>
            <Box className={classes.textWrapper}>
                <Typography variant='caption' color='inherit'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Box>
            <Box className={classes.buttons}>
                <RoundButton icon={faGithub} />
                <RoundButton icon={faLinkedin} />
            </Box>
            <Divider />
        </Box>
    );
};

export default Index;
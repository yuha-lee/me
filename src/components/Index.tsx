import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Box, CardMedia, makeStyles, Typography } from '@material-ui/core';
import AboutMe from './AboutMe';
import RoundButton from './RoundButton';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 25,
        minHeight: 'calc(100vh - 200px)',
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
            lineHeight: 0.8
        }
    },
    buttons: {
        display: 'flex',
        gap: 10
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
            <Box className={classes.buttons}>
                <RoundButton icon={faGithub} />
                <RoundButton icon={faLinkedin} />
            </Box>
        </Box>
    );
};

export default Index;
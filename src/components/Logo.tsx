import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '&:hover': {
            cursor: 'pointer'
        },
        '& span': {
            userSelect: 'none'
        }
    }
}));

const Logo = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root} onClick={() => window.location.href = '/'}>
            <Typography variant='h5' component='span' color='textPrimary'>YUHA</Typography>
            <Typography variant='h5' component='span' color='textSecondary'>LEE</Typography >
        </Box>
    );
};

export default Logo;
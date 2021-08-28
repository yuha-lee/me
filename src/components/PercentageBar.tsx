import { makeStyles, Box, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
    }
});

type PercentageBarProps = {
    percentage: number;
}

const PercentageBar = ({percentage}: PercentageBarProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <LinearProgress variant='determinate' value={percentage} />
        </Box>
    );
}

export default PercentageBar;
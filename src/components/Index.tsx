import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& h1': {
            color: theme.palette.common.white,
            lineHeight: '71px',
            userSelect: 'none'
        }
    }
}));

type IndexTypographyProps = {
    text: string;
};

const IndexTypography = ({ text }: IndexTypographyProps): JSX.Element => {
    return (
        <Typography variant='h1' display='block' align='right'>{text}</Typography>
    );
};

const Index = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <IndexTypography text={'Hi,'} />
            <IndexTypography text={"I'm"} />
            <IndexTypography text={'Yuha'} />
            <IndexTypography text={'Lee.'} />
        </Box>
    );
};

export default Index;
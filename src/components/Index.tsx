import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        userSelect: 'none',
        gap: 15,
        '& h1': {
            color: theme.palette.common.white,
            lineHeight: '71px',
        },
        '& span': {
            color: theme.palette.grey[400],
            lineHeight: '20px',
            textAlign: 'left',
            '@media (max-width: 618px)': {
                textAlign: 'right'
            },
        },
    },
    intro: {
        maxWidth: 400
    },
    '@global': {
        '@keyframes show': {
            '0%': {
                transform: 'translateY(-100px)'
            }
        }
    }
}));

type TypographyProps = {
    text: string;
};

const BigTypography = ({ text }: TypographyProps): JSX.Element => <Typography variant='h1' display='block' align='right'>{text}</Typography>;
const SmallTypography = ({ text }: TypographyProps): JSX.Element => <Typography variant='subtitle2' component='span' display='block' align='right'>{text}</Typography>;

const Index = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box>
                <BigTypography text={'Hi,'} />
                <BigTypography text={"I'm"} />
                <BigTypography text={'Yuha'} />
                <BigTypography text={'Lee.'} />
            </Box>
            <Box className={classes.intro}>
                <SmallTypography
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur leo quis felis feugiat sollicitudin. In convallis viverra metus sed ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus aliquam molestie sapien a semper. Fusce sit amet aliquet nunc.'} />
            </Box>
        </Box>
    );
};

export default Index;
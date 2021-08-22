import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, Box, makeStyles } from '@material-ui/core';
import Logo from './Logo';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '& h4, & h6': {
            color: theme.palette.common.white
        },
        padding: '5px 0'
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
                    <FontAwesomeIcon icon={faGithub} color='#FFFFFF' size='lg'/>
                    <FontAwesomeIcon icon={faLinkedin} color='#FFFFFF' size='lg'/>
                </Box>
            </Container>
        </Box>
    );
};

export default GNB;
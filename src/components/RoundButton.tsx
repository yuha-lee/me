import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '50%',
        width: 40,
        height: 40,
        boxShadow: '3px 3px 4px 0 rgb(0 0 0 / 20%), -3px -3px 4px 0 rgb(255 255 255 / 50%)',
        minWidth: 'auto',
        '& span svg': {
          margin: 0
        },
        backgroundColor: '#ebeff2'
    }
}));

type RoundButtonProps = {
    icon: IconProp;
};

const RoundButton = ({ icon }: RoundButtonProps): JSX.Element => {
    const classes = useStyles();
    return (
        <Button className={classes.root}>
            <FontAwesomeIcon icon={icon} size='lg'/>
        </Button>
    );
}

export default RoundButton;
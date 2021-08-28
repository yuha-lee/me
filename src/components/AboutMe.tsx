import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faReact, faGithub, faGitlab, faCss3, faJava, faJira, faNodeJs, faGit } from '@fortawesome/free-brands-svg-icons';
import { makeStyles, Typography, Box } from '@material-ui/core';
import PercentageBar from './PercentageBar';

const useStyles = makeStyles(theme => ({
    skill: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
    }
}));

const AboutMe = (): JSX.Element => {
    const classes = useStyles();
    const skills = [
        { icon: faJs, name: 'javaScript', bar: 80 }
    ];

    return (
        <>
            {
                skills.map((skill, index) => {
                    return (
                        <Box key={index} className={classes.skill}>
                            <FontAwesomeIcon icon={skill.icon} size='2x' />
                            <Typography variant='h6'>{skill.name}</Typography>
                            <PercentageBar percentage={skill.bar} />
                        </Box>
                    )
                })
            }
        </>
    )
}

export default AboutMe;
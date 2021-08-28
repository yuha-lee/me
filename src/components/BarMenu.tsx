import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { makeStyles, Button, Popper, Grow, ClickAwayListener, Box, MenuList, MenuItem } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';

const useStyles = makeStyles(theme => ({
  list: {
    width: 150,
    marginTop: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: theme.palette.common.white,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    '& ul': {
      padding: 0
    },
    '& li.MuiListItem-root.MuiMenuItem-root:last-child': {
      border: 'none'
    }
  },
  item: {
    borderBottom: '1px dashed rgba(255, 255, 255, 0.4)',
    minHeight: 48
  }
}));

const BarMenu = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchor = useRef<HTMLButtonElement>(null);
  
  const handleToggle = () => setOpen(!open);
  
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchor.current && anchor.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };
  
  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open) {
      anchor.current!.focus();
    }
  
    prevOpen.current = open;
  }, [open]);
  
    return (
      <>
        <Button
          ref={anchor}
          onClick={handleToggle}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
        >
          <FontAwesomeIcon icon={faBars} color='#FFFFFF' size='lg'/>
        </Button>
        <Popper open={open} anchorEl={anchor.current} role={undefined} transition disablePortal className={classes.list}>
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom' }}>
              <Box>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose} className={classes.item}>About Me</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.item}>Portfolio</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.item}>Resume</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Box>
            </Grow>
          )}
        </Popper>
      </>
    );
}
  
export default BarMenu;
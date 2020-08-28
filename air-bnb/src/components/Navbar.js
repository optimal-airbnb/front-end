import React from "react";
// import Typography from "@material-ui/core/Typography";
import { Menu, AppBar, Toolbar, Button, MenuItem } from "@material-ui/core";
// import CssBaseline from "@material-ui/core/CssBaseline";

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            airbnb price optimizer
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={
                (handleClose,
                () => {
                  console.log("button is clicked");
                })
              }
            >
              Home
            </MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
            <MenuItem onClick={handleClose}>Listings</MenuItem>
            <MenuItem onClick={handleClose}>Etc</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Nav;

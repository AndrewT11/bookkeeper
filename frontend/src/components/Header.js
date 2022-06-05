import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "rgb(61, 61, 61)" }} position="sticky">
        <Toolbar>
          <NavLink style={{ color: "grey" }} to="/">
            <Typography>
              <LibraryBooksIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              LinkComponent={NavLink}
              to="/add"
              label="Add book"
              value={value}
            />
            <Tab
              LinkComponent={NavLink}
              to="/books"
              label="Books"
              value={value}
            />
            <Tab
              LinkComponent={NavLink}
              to="/about"
              label="About Us"
              value={value}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

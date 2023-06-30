import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "./../assets/logo.gif";
import { Box } from "@mui/material";

const NavbarLanding = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <nav>
      <Box
        sx={{
          display: "flex",
          justifyContent: isSmallScreen || isMediumScreen ? "center" : "unset",
        }}
      >
        <img src={Logo} className="relative h-28 w-28 md:h-24 md:w-24 " />
      </Box>
    </nav>
  );
};

export default NavbarLanding;

import React from 'react';
import { useState } from 'react';
import {Menu ,MenuItem, Avatar,Badge, InputBase, Box, AppBar, Toolbar, Typography, styled } from '@mui/material';
import {Mail,Instagram, Notifications }from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems:'center',
  gap:"20px",
    [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));


const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap:"10px",
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));


const Navbar = () => {

  const [open,setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>

        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Elisa</Typography>
        <Instagram sx={{ display: { xs: "block", sm: "none" } }} />
        
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30,height:30}}src="https://images.unsplash.com/photo-1590541490155-0e1853825612?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          onClick={(e)=>setOpen(true)}
          />
        </Icons>

        <UserBox>
        <Avatar sx={{width:30,height:30}}src="https://media.licdn.com/dms/image/C5103AQH4OddcgGa8MA/profile-displayphoto-shrink_800_800/0/1530718611477?e=2147483647&v=beta&t=IA2A9y0DKrMCMNlaGQeuLY5Y8PHihLxbbwRgR_1BWaI"/>
        <Typography variant='span'>Elisa</Typography>
        </UserBox>


      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >

    <MenuItem >Profile</MenuItem>
    <MenuItem >My Account</MenuItem>
    <MenuItem >Logout</MenuItem>

      </Menu>
    </AppBar>
  );
};

export default Navbar;

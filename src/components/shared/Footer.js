import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {
    const navItems = [
        {route:"Home",pathname:"/",},
        {route:"Pages",pathname:"/pages",},
        {route:"Category",pathname:"/category",},
        {route:"News",pathname:"/news",},
        {route:"About",pathname:"/about",},
        {route:"Contact",pathname:"/contact",},
    ];
    return (
        <div>
            <Box className="bg-black px-2 py-10">
                <Container>
                <Box className="w-full text-center" sx={{
              "& svg":{
                  color:"white",
              }
            }}>
            
            
            <IconButton>
                  <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                  <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                  <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                  <FacebookIcon></FacebookIcon>
            </IconButton>
            
            </Box> 
            <Box className="w-full text-center" >
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
               <Button className="text-white">
                {item.route}
               </Button>
              </Link>
            ))}
          </Box> 
          <Typography variant="body2" color="gray" textAlign="center">
            @2023 The Dragon News. Design by Fatema Urmi
          </Typography>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;
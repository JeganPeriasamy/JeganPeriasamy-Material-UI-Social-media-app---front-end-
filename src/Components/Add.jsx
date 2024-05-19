import React, { useState } from 'react';
import { ButtonGroup, Button,Fab, Modal, styled, Tooltip, Box, Typography, Avatar, TextField, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { grey } from '@mui/material/colors';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "20px"
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)} sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
          width={400}
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color={grey[800]} textAlign="center">Create Post</Typography>
          <UserBox>
            <Avatar
              src="https://media.licdn.com/dms/image/C5103AQH4OddcgGa8MA/profile-displayphoto-shrink_800_800/0/1530718611477?e=2147483647&v=beta&t=IA2A9y0DKrMCMNlaGQeuLY5Y8PHihLxbbwRgR_1BWaI"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500}>Jegan</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            label="What's on your mind?"
            multiline
            rows={4}
            placeholder="Share your thoughts..."
            variant="standard"
            sx={{ width: '100%', marginTop: 3 }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <PhotoCameraBackIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup 
          fullWidth
          variant="contained" 
          aria-label="Basic button group">
            <Button>Post</Button>
            <Button  sx={{width:"100px"}}><DateRangeIcon/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;

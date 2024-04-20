import React from 'react';
import { Box, Typography, CardMedia, CardContent } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDetail, useMarginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '396px' },
        height: '326px',
        margin: 'auto', // Center horizontally
        marginTop: useMarginTop ? '-120px' : 'auto', // Apply marginTop conditionally
      }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          color: '#fff' 
        }}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{ 
              borderRadius: '50%', 
              height: '180px', 
              width: '180px', 
              mb: 2, 
              border: '1px solid #e3e3e3' 
            }} 
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;


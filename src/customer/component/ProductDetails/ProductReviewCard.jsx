import { Avatar, Box, Grid2, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div>
      <Grid2  container spacing={2} gap={3} >
            <Grid2 item xs={1} >
                 <Box>
                     <Avatar  className='text-white'  sx={{width:56 , height:56, bgcolor:"#9155fd"  }} >K</Avatar>
                 </Box>
            </Grid2>
            <Grid2 item xs={9}  >
                 <div  className='space-y-2'  >
                       <div>
                        <p  className=' font-semibold text-lg'  >Krishna</p>
                        <p className='opacity-60'  >April 5, 2023</p>
                       </div>
                 </div>
                 <Rating  readOnly  value={4.5} name='half-rating'  precision={0.5} />
                 <p className='text-sm   '>
                  Nice product , I love this shirt.
                 </p>
            </Grid2>
      </Grid2>
    </div>
  )
}

export default ProductReviewCard
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
    const [page , setPage] = React.useState(1)
    const handleChange = (event, value) => {
        setPage(value);
      };
  return (
   <>
    <div className='pagination-main'>
    <Stack spacing={2}>
      <Pagination count={1} page={1} onChange={handleChange} color='primary' />
    </Stack>
    </div>
   </>
  );
}
import { Box, CircularProgress } from '@mui/material';
import type { FC } from 'react';

export interface ILoadingProps {
  style?: any;
  color?: string;
}

const Loading: FC<ILoadingProps> = ({ style, color }) => {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        display: 'flex',
        ...style,
      }}
    >
      <CircularProgress sx={{ m: 2, color }} />
    </Box>
  );
};

export default Loading;

'use client';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container } from '../../components/containers/Container';

interface SkeletonListProps {
  skeletonCount: number;
}

export default function Loading() {

  const SkeletonList = ({skeletonCount = 3}: SkeletonListProps) => {
    const skeletons = Array.from({ length: skeletonCount }, (_, i) => (
      <Stack key={i} spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem', background: "#aaa", maxWidth: 280 }} />

        <Skeleton variant="circular" sx={{ background: "#aaa" }} width={40} height={40} />
        <Skeleton variant="rounded" sx={{ background: "#aaa" }} width={210} height={230} />
      </Stack>
    ));

    return (
      <>
        <Skeleton variant="text" sx={{ fontSize: '2rem', background: "#aaa", maxWidth: 480, padding: '1rem 0' }} />
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem 0' }}>
          {skeletons}
        </div>
      </>
    );
  };

  return (
    <Container>
      <SkeletonList skeletonCount={3} />
      <SkeletonList skeletonCount={5} />
    </Container>
  )
}

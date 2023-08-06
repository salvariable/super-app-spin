import React from 'react';
import BaseTag from './BaseTag';
import type { TagProps } from './types';
import useTheme from '../../../hooks/useTheme';

export default function PointsTag(props: TagProps) {
  const theme = useTheme();

  return (
    <BaseTag
      backgroundColor={
        props.inverted
          ? theme.colors.decoration_points
          : theme.colors.surface_points
      }
      textColor={
        props.inverted
          ? theme.colors.inverse_surface_primary
          : theme.colors.content_points
      }
      {...props}
    />
  );
}

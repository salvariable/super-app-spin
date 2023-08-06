import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseTag from './BaseTag';
import type { TagProps } from './types';

export default function PausedTag(props: TagProps) {
  const theme = useTheme();

  return (
    <BaseTag
      backgroundColor={
        props.inverted
          ? theme.colors.decoration_paused
          : theme.colors.surface_paused
      }
      textColor={
        props.inverted
          ? theme.colors.inverse_surface_primary
          : theme.colors.ui_warning
      }
      {...props}
    />
  );
}

import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseTag from './BaseTag';
import type { TagProps } from './types';

export default function UrgentTag(props: TagProps) {
  const theme = useTheme();

  return (
    <BaseTag
      backgroundColor={
        props.inverted
          ? theme.colors.decoration_urgent
          : theme.colors.surface_urgent
      }
      textColor={
        props.inverted
          ? theme.colors.inverse_surface_primary
          : theme.colors.ui_error
      }
      {...props}
    />
  );
}

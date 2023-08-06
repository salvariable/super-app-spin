import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseTag from './BaseTag';
import type { TagProps } from './types';

export default function ActivatedTag(props: TagProps) {
  const theme = useTheme();

  return (
    <BaseTag
      backgroundColor={
        props.inverted
          ? theme.colors.inverse_ui_success
          : theme.colors.surface_activated
      }
      textColor={
        props.inverted
          ? theme.colors.inverse_surface_primary
          : theme.colors.ui_success
      }
      {...props}
    />
  );
}

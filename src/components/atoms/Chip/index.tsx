import React from 'react';
import BaseChip from './BaseChip';
import type { ChipProps } from './types';
import DefaultChip from './DefaultChip';
import OutlineChip from './OutlineChip';

function Chip(props: ChipProps) {
  /**
   * Checking if the variant includes the word outline.
   * If it does, it will add the borderColor to the props. */
  const customProps = props.variant?.includes('outline')
    ? { ...props, borderColor: props.borderColor }
    : { ...props };

  switch (props.variant) {
    case 'default':
      return <DefaultChip {...customProps} />;
    case 'outline':
      return <OutlineChip {...customProps} />;
    default:
      return <BaseChip {...customProps} />;
  }
}

export default Chip;

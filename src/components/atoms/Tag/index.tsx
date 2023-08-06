import React from 'react';
import ActivatedTag from './ActivatedTag';
import InformationalTag from './InformationalTag';
import PausedTag from './PausedTag';
import PointsTag from './PointsTag';
import type { TagProps } from './types';
import UrgentTag from './UrgentTag';

function Tag(props: TagProps) {
  switch (props.variant) {
    case 'activated':
      return <ActivatedTag {...props} />;
    case 'paused':
      return <PausedTag {...props} />;
    case 'urgent':
      return <UrgentTag {...props} />;
    case 'points':
      return <PointsTag {...props} />;
    default:
      return <InformationalTag {...props} />;
  }
}

export default Tag;

import React from 'react';
import {
  BaseProgressBarProps,
  ProgressBarVariant,
  ConditionalBaseProgressBarProps,
} from '../types';

import BaseProgressBar from './BaseProgressBar';
import IconGoalProgressBar from './IconGoalProgressBar';

interface Props {
  variant?: keyof typeof ProgressBarVariant;
}

type ProgressBarProps = BaseProgressBarProps & Props;

function isProgressBarValid(value: string) {
  return Object.values(ProgressBarVariant).includes(value);
}

function ProgressBar({
  variant = 'default',
  firstColor,
  secondColor,
  testID,
  percent,
  pagination,
  goalIcon,
}: ProgressBarProps & ConditionalBaseProgressBarProps) {
  if (!isProgressBarValid(variant)) {
    throw new Error(
      `Unknown '${variant}'. Please only use ${Object.values(ProgressBarVariant)
        .map((value) => (typeof value === 'string' ? value : null))
        .filter((value) => value)}.`,
    );
  }

  const prop = {
    variant,
    testID,
    firstColor,
    secondColor,
    percent,
    goalIcon,
    pagination,
  };

  switch (variant) {
    case 'default':
      return <BaseProgressBar {...prop} />;
    case 'goalIcon':
      return <IconGoalProgressBar {...prop} />;
    default:
      return <BaseProgressBar {...prop} />;
  }
}

export default ProgressBar;

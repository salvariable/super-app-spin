import type { IconName } from '../Icon/Icon';

export type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  title: string;
  details: string;
  variant?: AlertVariant;
  iconName?: IconName;
}

interface ComponentProps {
  testID?: string;
}

type AlertDisplayProps = AlertProps & {
  iconBackgroundColor?: string;
};

export { AlertProps, AlertDisplayProps, ComponentProps };

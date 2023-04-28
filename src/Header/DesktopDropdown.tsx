import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, { FC, ReactNode } from 'react';
import { Text } from '../Text';
import { styled } from '@storybook/theming';
import {
  NavigationMenuItem,
  enterFromLeft,
  enterFromRight,
  exitToLeft,
  exitToRight,
} from './styles';
import { Icon } from '../Icon';
import { minSm } from '../_helpers';

export interface DesktopDropdownProps {
  children: ReactNode;
  name: string;
}

const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  ${NavigationMenuItem}

  &[data-state='open'] > .CaretDown {
    transform: rotate(-180deg) translateY(0px);
  }
`;

const CaretDown = styled.div`
  position: relative;
  transform: translateY(2px);
  transition: transform 250ms ease;
`;

const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${enterFromLeft};
  }

  &[data-motion='from-end'] {
    animation-name: ${enterFromRight};
  }

  &[data-motion='to-start'] {
    animation-name: ${exitToLeft};
  }

  &[data-motion='to-end'] {
    animation-name: ${exitToRight};
  }

  ${minSm} {
    width: auto;
  }
`;

export const DesktopDropdown: FC<DesktopDropdownProps> = ({
  children,
  name,
}) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenuTrigger>
        <Text
          as="div"
          lineHeightAuto
          // color={theme === 'light' ? 'gray800' : 'white'}
          color="white"
          variant="bodySm"
          fontWeight="bold"
        >
          {name}
        </Text>
        <CaretDown className="CaretDown">
          <Icon name="arrowdown" aria-hidden size={12} />
        </CaretDown>
      </NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenu.Item>
  );
};

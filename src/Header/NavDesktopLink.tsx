import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Text } from '../Text';
import { useHeaderContext } from './context';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HeaderDesktopItem } from './types';
import { LinkWithWrapper } from '../LinkWithWrapper';
import { NavigationMenuItem } from './styles';

export interface DesktopItemProps {
  item: HeaderDesktopItem;
}

const NavigationMenuLink = styled(LinkWithWrapper)`
  ${NavigationMenuItem}
`;

export const NavDesktopLink: FC<DesktopItemProps> = ({ item }) => {
  const { theme, desktopHover, desktopActive } = useHeaderContext();
  const isActive = desktopHover === item.name || desktopActive === item.name;
  const bgColor = isActive ? 'rgba(30, 167, 253, 0.07)' : 'transparent';

  return (
    <NavigationMenu.Link asChild>
      <NavigationMenuLink
        href={item.href || ''}
        LinkWrapper={item.linkWrapper}
        style={{ backgroundColor: bgColor }}
      >
        <Text
          as="div"
          lineHeightAuto
          color={isActive ? 'blue500' : theme === 'light' ? 'gray800' : 'white'}
          variant="bodySm"
          fontWeight="bold"
        >
          {item.name}
        </Text>
      </NavigationMenuLink>
    </NavigationMenu.Link>
  );
};

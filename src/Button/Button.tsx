import React, { FC, forwardRef } from 'react';
import styled from '@emotion/styled';
import { color as tokenColor, fontFamily } from '../_tokens';
import { Icon } from '../Icon';
import type { Icons } from '../Icon/Icon';

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  color?: 'blue' | 'white' | 'slate';
  leftIcon?: Icons;
  rightIcon?: Icons;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
  as?: 'button' | 'a' | 'span';
}

const Container = styled.a<{
  size: ButtonProps['size'];
  variant: ButtonProps['variant'];
  color: ButtonProps['color'];
}>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => {
    if (size === 'sm') return '0 1rem';
    if (size === 'md') return '0 1.5rem';
    if (size === 'lg') return '0 2rem';
    return null;
  }};
  background: ${({ variant, color }) => {
    if (variant === 'solid' && color === 'blue') return tokenColor.blue500;
    if (variant === 'solid' && color === 'white') return tokenColor.white;
    if (variant === 'solid' && color === 'slate') return tokenColor.slate100;
    return 'transparent';
  }};
  color: ${({ variant, color }) => {
    if (variant === 'solid' && color === 'blue') return tokenColor.white;
    if (variant === 'solid' && color === 'white') return tokenColor.blue500;
    if (variant === 'solid' && color === 'slate') return tokenColor.slate500;
    if (variant === 'outline' && color === 'blue') return tokenColor.blue500;
    if (variant === 'outline' && color === 'white') return tokenColor.white;
    if (variant === 'outline' && color === 'slate') return tokenColor.slate500;
    return null;
  }};
  height: ${({ size }) => {
    if (size === 'sm') return '1.75rem';
    if (size === 'md') return '2.5rem';
    if (size === 'lg') return '3rem';
    return null;
  }};
  box-shadow: ${({ color, variant }) => {
    if (variant === 'outline' && color === 'blue')
      return `0 0 0 1px ${tokenColor.blue500}`;
    if (variant === 'outline' && color === 'white')
      return `0 0 0 1px ${tokenColor.white}`;
    if (variant === 'outline' && color === 'slate')
      return `0 0 0 1px ${tokenColor.slate400}`;
    return null;
  }};
  font-size: ${({ size }) => {
    if (size === 'sm') return '0.75rem';
    if (size === 'md') return '0.875rem';
    if (size === 'lg') return '1rem';
    return '0.875rem';
  }};
  font-weight: 600;
  font-family: ${fontFamily.sans};
  gap: 0.375rem;
  transition: all 0.16s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ variant, color }) => {
      if (variant === 'solid' && color === 'blue') return tokenColor.blue600;
      if (variant === 'solid' && color === 'white') return tokenColor.blue100;
      if (variant === 'solid' && color === 'slate') return tokenColor.slate300;
      if (variant === 'outline' && color === 'blue') return tokenColor.blueTr10;
      if (variant === 'outline' && color === 'white')
        return 'rgba(255, 255, 255, 0.1)';
      if (variant === 'outline' && color === 'slate')
        return 'rgba(255, 255, 255, 0.1)';
      return 'transparent';
    }};
  }
`;

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      size = 'md',
      variant = 'solid',
      color = 'blue',
      leftIcon,
      rightIcon,
      href,
      target,
      onClick,
      as,
      ...rest
    },
    ref
  ) => {
    let iconSize: 12 | 14 | 16 = 14;
    if (size === 'sm') iconSize = 12;
    if (size === 'lg') iconSize = 16;

    let iconColor: keyof typeof tokenColor = 'slate500';
    if (variant === 'solid' && color === 'blue') iconColor = 'white';
    if (variant === 'solid' && color === 'white') iconColor = 'blue500';
    if (variant === 'outline' && color === 'blue') iconColor = 'blue500';
    if (variant === 'outline' && color === 'white') iconColor = 'white';

    let asContainer: ButtonProps['as'] = 'button';
    if (href) asContainer = 'a';
    if (as && !href) asContainer = as;

    return (
      <Container
        size={size}
        variant={variant}
        color={color}
        onClick={onClick}
        as={asContainer}
        href={href}
        target={target}
        ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
        {...rest}
      >
        {leftIcon && <Icon name={leftIcon} size={iconSize} color={iconColor} />}
        {children}
        {rightIcon && (
          <Icon name={rightIcon} size={iconSize} color={iconColor} />
        )}
      </Container>
    );
  }
);
Button.displayName = 'Button';

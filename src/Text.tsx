import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from './tokens';

export interface TextProps {
  children: String;
  variant?:
    | 'heading4xl'
    | 'heading3xl'
    | 'heading2xl'
    | 'headingXl'
    | 'headingLg'
    | 'headingMd'
    | 'headingSm'
    | 'headingXs'
    | 'bodyLg'
    | 'bodyMd'
    | 'bodySm';
  alignment?: 'start' | 'center' | 'end' | 'justify';
  fontWeight?: keyof typeof fontWeights;
  color?: keyof typeof colors;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'legend';
}

const Container = styled.div<{
  variant: TextProps['variant'];
  color: TextProps['color'];
  alignment: TextProps['alignment'];
  fontWeight: TextProps['fontWeight'];
}>`
  font-family: ${fontFamilies.sans};
  color: ${({ color }) => {
    if (color) return colors[color];
    return colors.black;
  }};
  font-size: ${({ variant }) => {
    if (variant === 'heading4xl') return fontSizes['6xl'];
    if (variant === 'heading3xl') return fontSizes['5xl'];
    if (variant === 'heading2xl') return fontSizes['4xl'];
    if (variant === 'headingXl') return fontSizes['3xl'];
    if (variant === 'headingLg') return fontSizes['2xl'];
    if (variant === 'headingMd') return fontSizes.xl;
    if (variant === 'headingSm') return fontSizes.lg;
    if (variant === 'headingXs') return fontSizes.md;
    if (variant === 'bodyLg') return fontSizes.lg;
    if (variant === 'bodyMd') return fontSizes.md;
    if (variant === 'bodySm') return fontSizes.sm;
  }};
  line-height: ${({ variant }) => {
    if (variant === 'heading4xl') return lineHeights['5xl'];
    if (variant === 'heading3xl') return lineHeights['4xl'];
    if (variant === 'heading2xl') return lineHeights['3xl'];
    if (variant === 'headingXl') return lineHeights['2xl'];
    if (variant === 'headingLg') return lineHeights.xl;
    if (variant === 'headingMd') return lineHeights.lg;
    if (variant === 'headingSm') return lineHeights.md;
    if (variant === 'headingXs') return lineHeights.sm;
    if (variant === 'bodyLg') return lineHeights.md;
    if (variant === 'bodyMd') return lineHeights.sm;
    if (variant === 'bodySm') return lineHeights.xs;
  }};
  margin-bottom: ${({ variant }) => {
    if (variant === 'heading4xl') return 0;
    if (variant === 'heading3xl') return 0;
    if (variant === 'heading2xl') return 0;
    if (variant === 'headingXl') return 0;
    if (variant === 'headingLg') return 0;
    if (variant === 'headingMd') return 0;
    if (variant === 'headingSm') return 0;
    if (variant === 'headingXs') return 0;
    if (variant === 'bodyLg') return '1.5rem';
    if (variant === 'bodyMd') return '1.25rem';
    if (variant === 'bodySm') return '1rem';
  }};
  font-weight: ${({ variant, fontWeight }) => {
    if (fontWeight) return fontWeights[fontWeight];
    if (variant === 'heading4xl') return fontWeights.semibold;
    if (variant === 'heading3xl') return fontWeights.semibold;
    if (variant === 'heading2xl') return fontWeights.semibold;
    if (variant === 'headingXl') return fontWeights.semibold;
    if (variant === 'headingLg') return fontWeights.semibold;
    if (variant === 'headingMd') return fontWeights.semibold;
    if (variant === 'headingSm') return fontWeights.semibold;
    if (variant === 'headingXs') return fontWeights.semibold;
    if (variant === 'bodyLg') return fontWeights.regular;
    if (variant === 'bodyMd') return fontWeights.regular;
    if (variant === 'bodySm') return fontWeights.regular;
  }};
`;

export const Text: FC<TextProps> = ({
  children,
  variant = 'bodyMd',
  alignment = 'start',
  fontWeight,
  color,
  as = 'p',
}) => {
  return (
    <Container
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      alignment={alignment}
      as={as}
    >
      {children}
    </Container>
  );
};

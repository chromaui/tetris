import React, { Meta, StoryObj } from '@storybook/react';
import { SubNav } from './SubNav';

const meta: Meta<typeof SubNav> = {
  title: 'Components/SubNav',
  component: SubNav,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SubNav>;

const features = [
  { id: '1', label: 'UI Tests', href: '/ui-tests' },
  { id: '2', label: 'Visual test', href: '/visual-tests', isActive: true },
  { id: '3', label: 'Interaction test', href: '/interaction-tests' },
  { id: '4', label: 'TurboSnap', href: '/turbosnap', external: true },
];

export const Light: Story = {
  args: {
    label: 'Features',
    items: features,
  },
};

export const Dark: Story = {
  args: {
    ...Light.args,
    variant: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

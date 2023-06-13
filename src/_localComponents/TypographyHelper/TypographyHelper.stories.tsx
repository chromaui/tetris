import { Meta, StoryObj } from '@storybook/react';

import { TypographyHelper } from './TypographyHelper';

const meta: Meta<typeof TypographyHelper> = {
  title: 'Local/TypographyHelper',
  component: TypographyHelper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TypographyHelper>;

export const Base: Story = {
  args: {
    variant: 'heading20',
  },
};

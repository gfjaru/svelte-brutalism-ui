import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './index.svelte';
import { ButtonVariants } from './button.js';

const meta = {
  title: 'Components UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ButtonVariants,
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "A Button!",
    onClick: () => console.log("Button Clicked")
  }
};

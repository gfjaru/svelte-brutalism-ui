import type { Meta, StoryObj } from '@storybook/svelte';
import Button, { ButtonTypes, ButtonVariants } from './index.svelte';

const meta = {
  title: 'Components UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      defaultValue: ButtonTypes[0],
      options: ButtonTypes,
    },
    variant: {
      control: { type: 'select' },
      defaultValue: ButtonVariants[0],
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

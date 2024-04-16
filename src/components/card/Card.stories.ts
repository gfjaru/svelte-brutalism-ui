import type { Meta, StoryObj } from '@storybook/svelte';
import Card from './index.svelte';

const meta = {
  title: 'Components UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    content: "A Button!",
  }
};

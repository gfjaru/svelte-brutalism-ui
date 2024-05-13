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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis vehicula venenatis. Donec finibus nunc diam, eu facilisis lacus fermentum et. Sed fringilla feugiat leo, at faucibus mi facilisis at. Nam nec eros enim. Aliquam et tempus magna. Curabitur condimentum feugiat tempor. Morbi vitae faucibus ipsum. Ut vitae nisi sed risus consequat gravida. In sed consectetur enim, ac consectetur nunc. Donec porta purus euismod dolor elementum sollicitudin. Etiam vel pharetra urna. Donec tortor mauris, dictum vel vulputate sed, sodales luctus dolor.",
  }
};

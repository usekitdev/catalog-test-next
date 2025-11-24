import { ProductCard } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProductCard> = {
  title: "Catalog/ProductCard",
  component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    title: "Test Product",
    price: 99,
    thumbnail: "https://placehold.co/300",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { ProductList } from "../product-list";
import { Product } from "@/lib/types/product";

const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Product ${i + 1}`,
  price: 100 + i,
  thumbnail: "https://placehold.co/400",
}));

const meta: Meta<typeof ProductList> = {
  title: "Catalog/ProductList",
  component: ProductList,
};

export default meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: {
    items: products,
  },
};

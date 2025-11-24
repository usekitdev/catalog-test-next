import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/lib/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function ProductCard({ title, price, thumbnail }: Product) {
  return (
    <Card className="pt-0 w-full hover:shadow-lg transition">
      <CardHeader className="p-0">
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="w-full h-52 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{price}$</p>
      </CardContent>
      <CardFooter className="gap-3">
        <Button>Купить в 1 клик</Button>
        <Button variant="outline">
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  );
}

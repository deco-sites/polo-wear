import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  /**
   * @title Texto em destaque
   */
  text?: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
  alternativeButton?: boolean;
}

function ProductShelf({
  title,
  text,
  products,
  alternativeButton = false,
}: Props) {
  const id = useId() + Math.floor(Math.random() * 100);

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <Container
      id={id}
      class="grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px_1fr] py-10 px-0 sm:px-5"
    >
      <h2 class="text-center uppercase row-start-1 col-span-full font-medium text-[22px] md:text-[24px]">
        {title} <span class="font-bold">{text}</span>
      </h2>

      <Slider
        class=" gap-6 col-span-full row-start-2 row-end-5"
        snap="min-h-[282px] snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {products?.map((product) => (
          <div class="min-w-[158px]">
            <ProductCard
              product={product}
              alternateButton={alternativeButton}
            />
          </div>
        ))}
      </Slider>

      <>
        <div class="relative z-10 col-start-1 row-start-3">
          <div class="absolute right-1/2">
            <Button
              variant="arrow"
              data-slide="prev"
              aria-label="Previous item"
            >
              <Icon size={20} id="ChevronLeft" strokeWidth={3} />
            </Button>
          </div>
        </div>
        <div class="relative z-10 col-start-3 row-start-3">
          <div class="absolute left-1/2">
            <Button variant="arrow" data-slide="next" aria-label="Next item">
              <Icon size={20} id="ChevronRight" strokeWidth={3} />
            </Button>
          </div>
        </div>
      </>

      <SliderControllerJS rootId={id} />
    </Container>
  );
}

export default ProductShelf;

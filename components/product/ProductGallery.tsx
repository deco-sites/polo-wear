import ProductCard from "$store/components/product/ProductCard.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import Filter from "../ui/Filter.tsx";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <Text>Not Found!</Text>
    </div>
  );
}

function Gallery({ page }: { page: ProductListingPage }) {
  return (
    <div class="px-8 sm:py-10 mt-4 w-screen flex ">
      <div class="hidden w-1/4 px-4 md:block">
        <Filter />
      </div>
      <div class="w-screen md:w-3/4">
        <div class="w-full p-2 bg-[#32332A] flex justify-between mb-4 md:hidden">
          <h2 class="text-center text-[22px] text-white font-normal">Filtro</h2>
          <Icon
            id="ChevronRight"
            width={28}
            height={28}
            strokeWidth={1}
            class="text-white"
          />
        </div>
        <div class="flex-col flex md:flex-row md:justify-between">
          <p>
            Produtos encontrados: <strong>57</strong>
          </p>
          <select class="py-2 px-6 border-1 border-black text-gray-400">
            <option value="Selecione" class="text-gray-800">Selecione</option>
            <option value="Selecione" class="text-gray-800">Menor Preço</option>
            <option value="Selecione" class="text-gray-800">Maior Preço</option>
            <option value="Selecione" class="text-gray-800">
              Mais vendidos
            </option>
            <option value="Selecione" class="text-gray-800">
              Melhores avaliações
            </option>
            <option value="Selecione" class="text-gray-800">A - Z</option>
            <option value="Selecione" class="text-gray-800">Z - A</option>
            <option value="Selecione" class="text-gray-800">
              Data de lançamento
            </option>
            <option value="Selecione" class="text-gray-800">
              Melhor Desconto
            </option>
          </select>
        </div>
        <div class=" relative grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 items-center">
          {page.products?.map((product, index) => (
            <div class="w-full list-none">
              <ProductCard product={product} preload={index === 0} />
            </div>
          ))}
        </div>

        <div class="flex flex-row items-center justify-center gap-2 my-4">
          <a rel="prev" href={page.pageInfo.previousPage ?? "#"}>
            <Button disabled={!page.pageInfo.previousPage} variant="icon">
              <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
            </Button>
          </a>
          <Text variant="caption">
            {page.pageInfo.currentPage + 1}
          </Text>
          <a rel="next" href={page.pageInfo.nextPage ?? "#"}>
            <Button disabled={!page.pageInfo.nextPage} variant="icon">
              <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductGallery({ page }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Gallery page={page} />;
}

export default ProductGallery;

import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";
import Toggle from "../ui/Toggle.tsx";
import { useUI } from "../../sdk/useUI.ts";
import Input from "../ui/Input.tsx";
import { signal } from "@preact/signals";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];
  const { detailsToggle } = useUI();
  const { currentImage } = useUI();

  return (
    <Container class="py-10">
      <div class="flex flex-col gap-4 ">
        <Breadcrumb
          itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
        />
        {/* Image Gallery */}
        <div class="flex flex-col overflow-auto snap-x snap-mandatory p-8 scroll-smooth sm:gap-8">
          <div class="flex flex-col items-center lg:flex-row lg:gap-2 lg:justify-between">
            <div class="flex gap-2 max-w-full lg:max-w-[450px] flex-col lg:flex-row justify-center items-center">
              <Image
                style={{ aspectRatio: "360 / 500" }}
                class=" sm:min-w-0 max-w-[450px] sm:w-auto sm:h-[600px]"
                sizes="(max-width: 540px) 100vw, 30vw"
                alt={[front, back][currentImage.value].alternateName}
                src={[front, back][currentImage.value].url!}
                width={360}
                height={500}
              />
              <div class="flex self-start gap-4 lg:flex-col">
                {[front, back ?? front].map((image) => (
                  <button
                    class="border border-light-border rounded-xl p-2"
                    onClick={() =>
                      currentImage.value == 0
                        ? currentImage.value = 1
                        : currentImage.value = 0}
                  >
                    <Image src={image.url!} width={50} height={60} />
                  </button>
                ))}
              </div>
            </div>
            {/* Product Info */}
            <div class=" flex gap-8 flex-col lg:justify-between items-center px-4 sm:px-0">
              {/* Breadcrumb */}

              {/* Code and name */}
              <div class="mt-4 flex  flex-col items-center sm:mt-8">
                <h1 class="text-center ">
                  <Text class="text-center text-2xl !font-bold">{name}</Text>
                </h1>
                <div>
                  <Text class="uppercase text-[14px] text-common font-light">
                    Cod. {gtin}
                  </Text>
                </div>
              </div>
              {/* Prices */}
              <div class="mt-4">
                <div class="flex flex-row gap-2 items-center">
                  <Text
                    class="line-through"
                    tone="subdued"
                    variant="list-price"
                  >
                    {formatPrice(listPrice, offers!.priceCurrency!)}
                  </Text>
                  <Text
                    tone="price"
                    variant="heading-3"
                    class="!font-semibold !text-[30px]"
                  >
                    {formatPrice(price, offers!.priceCurrency!)}
                  </Text>
                </div>
                <Text tone="subdued" variant="caption" class="!font-italic">
                  {installments}
                </Text>
              </div>
              {/* Sku Selector */}
              <div class="mt-4 w-full sm:mt-6">
                <ProductSelector product={product} />
              </div>
              <div class="flex flex-col gap-4 lg:flex-row">
                <Button class="bg-transparent border !border-light-border rounded-none !font-light text-[14px]">
                  Descubre seu Tamanho
                </Button>
                <Button class="bg-transparent border !border-light-border rounded-none !font-light text-[14px]">
                  Tabela de medidas
                </Button>
              </div>
              {seller && (
                <AddToCartButton
                  skuId={productID}
                  sellerId={seller}
                />
              )}
              <Input
                buttonText="OK"
                label="Calcule o frete e prazo de entrega"
                link={{ href: "#", text: "Não sei meu CEP" }}
              />
            </div>
          </div>
          {/* Description card */}
          <div class="w-full lg:self-start lg:w-[50%]">
            <Toggle />
            {detailsToggle.value === "Descrição" &&
              (
                <div class="mt-4 sm:mt-6">
                  <Text variant="caption">
                    {description && <div class="ml-2 mt-2">{description}</div>}
                  </Text>
                </div>
              )}
          </div>
        </div>
      </div>
    </Container>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;

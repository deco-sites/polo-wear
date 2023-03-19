import Image from "deco-sites/std/components/Image.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-center items-center gap-2">
      {options.map(([url, value]) => (
        <a href={url}>
          <Avatar
            class="bg-default"
            variant="abbreviation"
            content={value}
            disabled={url === product.url}
          />
        </a>
      ))}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
  alternateButton?: boolean;
}

function ProductCard({ product, preload, alternateButton = false }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { price } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group mt-6"
    >
      <a href={url} aria-label="product link">
        <div class="flex flex-col md:min-w-[230px]">
          <div class="hidden absolute bg-[#991113] p-1 ml-4 rounded-br-[20px]">
            <span class="font-black	text-base text-white mx-1.5">
              25%
            </span>
          </div>

          <div class="flex items-end relative">
            <div
              class={`w-full text-center transition-all ease-in-out duration-1000 group-hover:opacity-100 opacity-0 absolute hover:!opacity-70 bg-green-600 p-4 text-white translate-y-60 group-hover:translate-y-0 ${
                alternateButton
                  ? "!bg-black !-translate-y-28 group-hover:!-translate-y-12 !p-3"
                  : ""
              }`}
            >
              Comprar agora
            </div>
            <Image
              src={front.url!}
              alt={front.alternateName}
              width={158}
              height={200}
              class="rounded w-full group-hover:hidden"
              preload={preload}
              loading={preload ? "eager" : "lazy"}
              sizes="(max-width: 640px) 50vw, 20vw"
            />
            <Image
              src={back?.url ?? front.url!}
              alt={back?.alternateName ?? front.alternateName}
              width={158}
              height={200}
              class="rounded w-full hidden group-hover:block"
              sizes="(max-width: 640px) 50vw, 20vw"
            />
          </div>
          <p class="text-center text-[13px]">{name}</p>
          <p class="font-bold text-center">
            {formatPrice(price, offers!.priceCurrency!)}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;

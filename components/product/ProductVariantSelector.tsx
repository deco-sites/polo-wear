import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product }: Props) {
  const possibilities = useVariantPossibilities(product);
  const { url: currentUrl } = product;

  return (
    <ul class="flex flex-col w-full gap-8">
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-col gap-2">
          <Text variant="caption" class="border-b w-full pb-2 text-center lg:text-left">{name}</Text>
          <ul class="flex flex-row justify-center gap-2">
            {Object.entries(possibilities[name]).map(([url, value]) => (
              <li>
                <a href={url}>
                  <Avatar
                    // deno-lint-ignore no-explicit-any
                    content={value as any}
                    disabled={url === currentUrl}
                    variant={name === "COR" ? "color" : "abbreviation"}
                  />
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;

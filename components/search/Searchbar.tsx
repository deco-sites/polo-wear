/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */

import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";
import { useEffect, useRef } from "preact/compat";

import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import ProductCard from "$store/components/product/ProductCard.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import useAutocomplete from "deco-sites/std/commerce/vtex/hooks/useAutocomplete.ts";
import SearchTermList from "./SearchTermList.tsx";
import { useUI } from "$store/sdk/useUI.ts";

function CloseButton() {
  const { displaySearchbar } = useUI();

  return (
    <Button variant="icon" onClick={() => (displaySearchbar.value = false)}>
      <Icon
        class="border border-black border-2 rounded-full w-[30px] h-[30px]"
        id="XMark"
        width={20}
        height={20}
        strokeWidth={2}
      />
    </Button>
  );
}

// Editable props
export interface EditableProps {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;
  /**
   * TODO: Receive querystring from parameter in the server-side
   */
  query?: string;
}

export type Props = EditableProps & {
  /**
   * @title Product suggestions
   * @description Product suggestions displayed on searchs
   */
  products?: Product[] | null;
  suggestions?: Suggestion | null;

  /** used for autocomplete */
  configVTEX?: ClientConfigVTEX;
};

function Searchbar({
  placeholder = "O que você procura?",
  action = "/s",
  name = "q",
  query,
  products,
  suggestions: _suggestions,
  configVTEX,
}: Props) {
  const searches = _suggestions?.searches;
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { setSearch, suggestions } = useAutocomplete({
    configVTEX,
  });

  useEffect(() => {
    if (!searchInputRef.current) {
      return;
    }

    searchInputRef.current.focus();
  }, []);

  const hasSuggestions = !!suggestions.value;
  const emptySuggestions = suggestions.value?.searches?.length === 0;
  const _products = suggestions.value?.products &&
      suggestions.value?.products?.length !== 0
    ? suggestions.value.products
    : products;

  return (
    <div class="flex flex-grow items-stretch">
      <div class="h-full text-xs w-[30%] pt-2 bg-gray-bg">
        <p class="text-center font-bold">
          {searchInputRef.current?.value ? "Sugestões" : "Mais Procurados"}
        </p>
      </div>
      <div class="flex max-w-[70%] flex-col p-4">
        <div class="flex  items-center">
          <form
            id="searchbar"
            action={action}
            class="flex px-2 py-2 border-b-1 border-black"
          >
            <Button
              variant="icon"
              aria-label="Search"
              htmlFor="searchbar"
              tabIndex={-1}
            >
              <Icon
                class="text-subdued"
                id="MagnifyingGlass"
                width={20}
                height={20}
                strokeWidth={0.01}
              />
            </Button>
            <input
              ref={searchInputRef}
              id="search-input"
              class="flex-grow text-black outline-none placeholder-shown:sibling:hidden"
              name={name}
              defaultValue={query}
              onInput={(e) => {
                const value = e.currentTarget.value;

                setSearch(value);
              }}
              placeholder={placeholder}
              role="combobox"
              aria-controls="search-suggestion"
              autocomplete="off"
            />
            <button
              type="button"
              aria-label="Clean search"
              class="focus:outline-none text-black"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation();
                if (searchInputRef.current === null) return;

                searchInputRef.current.value = "";
                setSearch("");
              }}
            >
              <Text variant="caption" tone="default">limpar</Text>
            </button>
          </form>
          <CloseButton />
        </div>
        <div class="flex flex-col gap-6 divide-y divide-default mt-6 empty:mt-0 md:(flex-row divide-y-0)">
          {searches && searches.length > 0 && !hasSuggestions && (
            <SearchTermList title="Mais buscados" terms={searches} />
          )}
          {hasSuggestions && !emptySuggestions && (
            <SearchTermList
              id="search-suggestion"
              title="Sugestões"
              terms={suggestions.value.searches!}
            />
          )}
          {hasSuggestions && emptySuggestions && (
            <div class="py-16 md:(py-6!) flex flex-col gap-4 w-full">
              <Text
                class="text-center text-black"
                role="heading"
                aria-level="3"
              >
                Nenhum resultado encontrado
              </Text>
              <Text variant="body" tone="subdued" class="text-center">
                Vamos tentar de outro jeito? Verifique a ortografia ou use um
                termo diferente
              </Text>
            </div>
          )}
          {_products && !emptySuggestions && (
            <div class="flex flex-col pt-6 md:pt-0 gap-6 overflow-x-hidden scrollbar-none">
              <Text class="px-4 text-black !font-bold">RECOMENDAMOS</Text>
              {_products.map((
                product,
                index,
              ) => (
                <div
                  class={`${
                    index === 0
                      ? "ml-4"
                      : index === _products.length - 1
                      ? "mr-4"
                      : ""
                  } min-w-[200px] max-w-[200px] text-black flex flex-col scrollbar-none`}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;

import HeaderButton from "$store/islands/HeaderButton.tsx";
import Image from "deco-sites/std/components/Image.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";

function Navbar({ items }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center  w-full px-2 py-[16px] gap-2`}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Image
            src="https://polowearhomolog.vteximg.com.br/arquivos/logo_polowear_white.png?v=637687032701630000"
            id="Logo"
            width={210}
            height={41.86}
            alt="Logo"
          />
        </a>

        <div class="flex gap-[10px]">
          <HeaderButton variant="search" />
          <HeaderButton variant="user" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center w-full pl-2 pr-3">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-2 w-[160px]">
            <Image
              src="https://polowearhomolog.vteximg.com.br/arquivos/logo_polowear_white.png?v=637687032701630000"
              id="Logo"
              width={210}
              height={41.86}
              alt="logo"
            />
          </a>
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
          <HeaderButton variant="search" />
          <HeaderButton variant="user" />
          <HeaderButton variant="cart" />
        </div>
      </div>
      <div class="hidden md:flex flex-auto text-white flex justify-center">
        {items.map((item) => <NavItem item={item} />)}
      </div>
    </>
  );
}

export default Navbar;

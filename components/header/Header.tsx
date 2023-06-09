import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";
import { LiveImage } from "../../sections/Highlights.tsx";

import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import BannerWide from "../product/BannerWide.tsx";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  alertsDesktop?: LiveImage;
  alertsMobile?: LiveImage;
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;

  /**
   * @description vtex config used for search autocompletion;
   */
  configVTEX?: LoaderReturnType<ClientConfigVTEX>;
}

function Header(
  {
    alertsDesktop,
    alertsMobile,
    searchbar: _searchbar,
    products,
    navItems = [],
    suggestions,
    configVTEX,
  }: Props,
) {
  const searchbar = { ..._searchbar, products, suggestions, configVTEX };
  const desktop = 50;
  const mobile = 200;
  return (
    <header class={`relative h-[${headerHeight}]`}>
      <div class=" bg-black fixed w-full z-50 ">
        {alertsDesktop !== undefined
          ? <BannerWide width={1100} height={50} image={alertsDesktop} />
          : <div></div>}
        <Navbar items={navItems} searchbar={searchbar} />
      </div>
      <div class="block bg-black fixed w-full z-50 md:hidden">
        {alertsMobile !== undefined
          ? <BannerWide width={1100} height={200} image={alertsMobile} />
          : <div></div>}
        <Navbar items={navItems} searchbar={searchbar} />
      </div>
      <Modals
        menu={{ items: navItems }}
        searchbar={searchbar}
      />
    </header>
  );
}

export default Header;

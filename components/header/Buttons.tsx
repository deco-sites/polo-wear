import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";

function SearchButton() {
  const { displaySearchbar } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="search icon button"
      onClick={() => {
        displaySearchbar.value = !displaySearchbar.peek();
      }}
    >
      <Icon
        class="text-white"
        id="MagnifyingGlass"
        width={20}
        height={20}
        strokeWidth={0.1}
      />
    </Button>
  );
}

function MenuButton() {
  const { displayMenu, displayUserModal } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon
        class="text-white"
        id="Bars3"
        width={30}
        height={30}
        strokeWidth={0.01}
      />
    </Button>
  );
}

function CartButton() {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;

  return (
    <Button
      variant="icon"
      class="relative"
      aria-label="open cart"
      disabled={loading.value}
      onClick={() => {
        displayCart.value = true;
      }}
    >
      <Icon
        class="text-white"
        id="ShoppingCart"
        width={20}
        height={20}
        strokeWidth={2}
      />
      <span class="absolute text-[9px] right-0 top-2 rounded-full bg-badge text-white w-4 h-4 flex items-center justify-center">
        {totalItems ? totalItems : 0}
      </span>
    </Button>
  );
}

function UserButton() {
  const { displayUserModal } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="open menu"
      onClick={() => {
        displayUserModal.value = true;
      }}
    >
      <Icon class="text-white" id="User" width={20} height={20} />
    </Button>
  );
}

function HeaderButton(
  { variant }: { variant: "cart" | "search" | "menu" | "user" },
) {
  if (variant === "cart") {
    return <CartButton />;
  }

  if (variant === "search") {
    return <SearchButton />;
  }

  if (variant === "menu") {
    return <MenuButton />;
  }
  if (variant === "user") {
    return <UserButton />;
  }

  return null;
}

export default HeaderButton;

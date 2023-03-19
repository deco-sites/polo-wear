import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <Text
      class="flex-grow text-white min-h-[40px] flex items-center justify-center"
      variant={level === 0 ? "menu" : "caption"}
    >
      {item.label}
    </Text>
  );

  return (
    <li class="relative">
      <div
        class={`flex justify-between items-start w-full py-2 ${
          level > 0 ? "pl-2" : ""
        }`}
        onClick={() => {
          if (hasChildren) open.value = !open.value;
        }}
      >
        {hasChildren
          ? title
          : <a class="w-full inline-block" href={item.href}>{title}</a>}

        {hasChildren && (
          <Button class="absolute right-0" variant="icon">
            <Icon
              class={`text-white ${open.value === true ? "hidden" : "block"}`}
              id="ChevronRight"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
            <Icon
              class={`text-white ${open.value === true ? "block" : "hidden"}`}
              id="ChevronDown"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
          </Button>
        )}
      </div>

      {hasChildren && (
        <ul
          class={`bg-black flex-col ${open.value === true ? "flex" : "hidden"}`}
        >
          {item.children!.map((node) => (
            <MenuItem
              item={node}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="flex flex-col text-base py-2 bg-hover">
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="#"
          >
            <Icon id="ShoppingCart" width={20} height={20} strokeWidth={2} />
            <Text class="text-white ">Meus Pedidos</Text>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="#"
          >
            <Icon id="User" width={20} height={20} strokeWidth={2} />
            <Text class="text-white">Minha conta</Text>
          </a>
        </li>
      </ul>
      <ul class=" flex-grow flex flex-col divide-y divide-divider">
        {items.map((item) => <MenuItem item={item} />)}
      </ul>
    </>
  );
}

export default Menu;

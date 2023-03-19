import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <Text class="group-hover:border-black text-white">
          {label}
        </Text>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-black bg-opacity-90 z-50 flex items-start justify-center gap-x-6 w-full mt-[${headerHeight}]`}
            style={{ top: "80px", left: "0px" }}
          >
            <ul class="flex items-start flex-col h-[400px] p-6 pb-40 flex-wrap w-full justify-center gap-x-6">
              {children.map((node) => (
                <li>
                  <a class="hover:underline" href={node.href}>
                    <Text>{node.label}</Text>
                  </a>

                  <ul class="flex flex-col gap-1 mt-4">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="hover:underline " href={leaf.href}>
                          <Text>{leaf.label}</Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;

import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";
import { asset } from "$fresh/src/runtime/utils.ts";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a class="text-black" href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-2 px-4 sm:py-12 md:p-4 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-gray-100 flex flex-col">
      <div>
        <Container class="w-full flex flex-col">
          <FooterContainer>
          </FooterContainer>

          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20 justify-around">
              {sections.map((section) => (
                <li>
                  <div>
                    <Text
                      variant="heading-3"
                      class="font-bold"
                      tone="default-inverse"
                    >
                      {section.label}
                    </Text>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4 mt-4">
              {sections.map((section) => (
                <li>
                  <Text variant="body" tone="default-inverse">
                    <details class="border-t-2 border-gray-200 p-4">
                      <summary class="font-bold text-black text-uppercase cursor-pointer">
                        {section.label}
                      </summary>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 px-2 pt-2`}
                      >
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </Text>
                </li>
              ))}
            </ul>
          </FooterContainer>

          <FooterContainer class="flex flex-col">
            <div class=" p-2 flex justify-center gap-4 border-t-2   border-gray-200">
              <Icon id="Elo" width={30} height={30} strokeWidth={1} />
              <Icon id="Mastercard" width={30} height={30} strokeWidth={1} />
              <Icon id="Pix" width={30} height={30} strokeWidth={1} />
              <Icon id="Visa" width={30} height={30} strokeWidth={1} />
            </div>
            <div class="flex justify-center border-b-2 p-2">
              <Icon id="Facebook" width={30} height={30} strokeWidth={1} />
              <Icon id="Instagram" width={30} height={30} strokeWidth={1} />
            </div>
            <div class="flex gap-4 mt-6">
              <strong>Polo Wear Shop Center Leste Aricanduva</strong>
              Avenida Aricanduva 5555 - Loja LUC Ancora N 25 - Jardim Santa
              Terezinha - São Paulo - SP - CEP: 03527-900 CNPJ:
              23.803.373/0001-04
            </div>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;

import Image from "deco-sites/std/components/Image.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Button from "$store/components/ui/Button.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";
import { useUI } from "$store/sdk/useUI.ts";

import Icon from "$store/components/ui/Icon.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import ChangeGender from "../product/ChangeGender.tsx";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights?: Highlight[];
  highlightsFeminino?: Highlight[];
  title: string;
  /**
   * @title Texto em destaque
   */
  text?: string;
}

function Highlights(
  { highlights = [], highlightsFeminino = [], title, text }: Props,
) {
  const id = useId() + useId();

  const { gender } = useUI();
  console.log(gender.value);

  return (
    <Container
      id={id}
      class="flex flex-col pt-10 w-full pb-8 gap-5 items-center"
    >
      <div class="flex flex-col gap-10">
        <h2 class="text-center">
          <Text variant="heading-2">
            {title} <span class="font-extrabold">{text}</span>
          </Text>
        </h2>
        <ChangeGender />
      </div>
      <div class="flex relative items-center w-full">
        <div class="absolute left-0 bg-interactive-inverse rounded-full border-default border">
          <Button variant="icon" data-slide="prev" aria-label="Previous item">
            <Icon size={20} id="ChevronLeft" strokeWidth={3} />
          </Button>
        </div>

        <Slider
          class="flex-grow gap-[60px] px-[60px] col-span-full row-start-2 row-end-5 scrollbar-none"
          snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
        >
          {gender.value === "Masculino"
            ? highlights.map(({ href, src, alt, label }) => (
              <a
                href={href}
                class="flex flex-col gap-4 items-center min-w-[250px]"
              >
                <Image
                  class="rounded-full"
                  src={src}
                  alt={alt}
                  width={250}
                  height={250}
                />
                <Text class="uppercase text-base font-medium">{label}</Text>
              </a>
            ))
            : highlightsFeminino.map(({ href, src, alt, label }) => (
              <a
                href={href}
                class="flex flex-col gap-4 items-center min-w-[250px]"
              >
                <Image
                  class="rounded-full"
                  src={src}
                  alt={alt}
                  width={250}
                  height={250}
                />
                <Text class="uppercase text-base font-medium">{label}</Text>
              </a>
            ))}
        </Slider>
        <div class="absolute right-[-10px] bg-interactive-inverse rounded-full border-default border">
          <Button variant="icon" data-slide="next" aria-label="Next item">
            <Icon size={20} id="ChevronRight" strokeWidth={3} />
          </Button>
        </div>
      </div>

      <SliderControllerJS rootId={id} />
    </Container>
  );
}

export default Highlights;

import Image from "deco-sites/std/components/Image.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";

export interface Highlight {
    src: LiveImage;
    alt: string;
    href: string;
    label: string;
}

export interface Props {
    highlights?: Highlight[];
    title: string;
    boldTitle?: string;
}

function Highlights({ highlights = [], title, boldTitle }: Props) {
    const id = useId();
    return (
        <Container id={id} class="grid grid-cols-1 grid-rows-[48px_1fr] py-10 ">
            <h2 class="text-center row-start-1 col-span-full">
                <Text variant="heading-2" class="text-uppercase">{title} <strong>{boldTitle}</strong></Text>
            </h2>

            <Slider
                class="gap-6 overflow-x-hidden overflow-y-hidden col-span-full row-start-2 row-end-5"
                snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
            >
                {highlights.map(({ href, src, alt, label }) => (
                        <a
                            href={href}
                            className="flex flex-col gap-4 items-center min-w-[190px]"
                        >
                            <Image
                                class="rounded-full"
                                src={src}
                                alt={alt}
                                width={190}
                                height={190}
                            />
                            <Text variant="body">{label}</Text>
                        </a>
                ))}
            </Slider>

        </Container>
    );
}

export default Highlights;

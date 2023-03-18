import { LiveImage } from "../../sections/Highlights.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Container from "../ui/Container.tsx";


export type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
    images: LiveImage[]
}

function OffersGallery({
    images = []
} : Props) {
    return (
        <Container>
            <div class="flex flex-wrap-reverse basis-gallery">
                {images.map(image => <Image class="flex-1 max-h-[300px]" src={image} width={200} height={200}/>)}
            </div>
        </Container>
    )
}

export default OffersGallery
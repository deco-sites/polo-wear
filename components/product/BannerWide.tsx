import { LiveImage } from "../../sections/Highlights.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
    image: LiveImage,
    width?: number,
    height?: number
}

function BannerWide({image, width=1100, height=50} : Props) {
    return (
        <Image src={image} width={width} height={height} class="w-full"/>
    )
}

export default BannerWide
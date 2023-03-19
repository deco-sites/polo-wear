import { LiveImage } from "../../sections/Highlights.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Container from "../ui/Container.tsx";

export type size = "Grande" | "Pequeno"

export interface CategoryItem {
    image: LiveImage,
    imageType: size,
    alt: string,
    title: string,
    href: string
}

export interface Props {
    categories: CategoryItem[]
}

function CategorieItem({image, alt, title, href, imageType} : CategoryItem) {
    return (
            <a href={href} class={`relative max-h-[400px]  group overflow-hidden w-full ${imageType === "Grande" ? "lg:max-w-[795px] lg:max-h-[400px]" : "lg:max-w-[400px] lg:h-full"} `}>
                <Image src={image} alt={alt} width={imageType === "Grande" ? 700 : 400} height={400} class="w-full max-w-full h-auto group-hover:scale-125 transition-all duration-300"/>
                <h3 class="absolute text-white right-0 left-0 top-[40%] bottom-[40%] py-[16px] px-[32px] m-auto w-min max-h-min text-[35px] uppercase font-thin border border-b-1 group-hover:bg-black transition-all duration-300" >{title}</h3>
            </a>
    )
}

function CategoriesGallery({categories} : Props) {
    return (
        <Container class="flex flex-col gap-5 items-center sm:(flex-row items-stretch flex-wrap) ">
            {categories.map(categorie => <CategorieItem imageType={categorie.imageType} title={categorie.title} alt={categorie.alt} href={categorie.href} image={categorie.image}/>)}
        </Container>    
    )
}

export default CategoriesGallery 
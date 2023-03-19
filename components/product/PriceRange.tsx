import { LiveImage } from "../../sections/Highlights.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Container from "../ui/Container.tsx";

export interface ProductRangeItem {
  image: LiveImage;
  text: string;
  price: string;
}

export interface Props {
  title: string;
  /**
   * @title Texto em destaque
   */
  text?: string;
  itens: ProductRangeItem[];
}

function PriceRangeCard({ image, text, price }: ProductRangeItem) {
  const dividedPrice = price.split(",");

  return (
    <a class="group" href="#">
      <Image src={image} width={480} height={480} />
      <p class="text-xl sm:text-2xl transition-all group-hover:cursor-pointer duration-200 group-hover:bg-black group-hover:text-white mt-1 text-center font-bold py-[49px] border border-price-box">
        {text} R${" "}
        <span class="text-[40px] sm:text-[60px] font-medium">
          {dividedPrice[0]}
        </span>,<span class="text-[24px] sm:text-[40px] font-medium">
          {dividedPrice[1]}
        </span>
      </p>
    </a>
  );
}

function PriceRange({ title, itens = [], text }: Props) {
  return (
    <Container class="flex flex-col gap-10 mt-10 mb-[60px] items-center">
      <h2 class="uppercase font-medium text-[28px] sm:text-[36px]">
        {title} <span class="font-bold">{text}</span>
      </h2>
      <div class="flex gap-5 sm:gap-[60px] px-2">
        {itens.map((item) => (
          <PriceRangeCard
            image={item.image}
            price={item.price}
            text={item.text}
            key={item.text}
          />
        ))}
      </div>
    </Container>
  );
}

export default PriceRange;

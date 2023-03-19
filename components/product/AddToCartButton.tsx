import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";

interface Props {
  skuId: string;
  sellerId: string;
}

function AddToCartButton({ skuId, sellerId }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <Button {...props} class="w-full !py-[20px] rounded-none text-[13px] uppercase !text-white w-full !bg-green-button text-center transition-all ease-in-out duration-1000 hover:!opacity-70 bg-green-600 p-4 text-white">
      Adicionar à Sacola
    </Button>
  );
}

export default AddToCartButton;

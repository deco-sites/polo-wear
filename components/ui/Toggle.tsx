import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";
import { useUI } from "../../sdk/useUI.ts";

function Toggle() {
    
  const { detailsToggle } = useUI()

  return (
    <div class=" flex gap-[1px] w-full ">
      <Button
        onClick={() => {
          detailsToggle.value = "Descrição";
        }}
        class={`${
          detailsToggle.value === "Descrição"
            ? "bg-black-button text-white"
            : "bg-transparent text-black !border !border-light-border"
        } font-semibold uppercase border border-light-border !rounded-none w-[50%] text-[12px]`}
      >
        Descrição
      </Button>
      <Button
        onClick={() => {
          detailsToggle.value = "Especificações";
        }}
        class={`${
          detailsToggle.value === "Especificações"
            ? "bg-black-button text-white !border-0 "
            : "bg-transparent text-black !border-2 !border-light-border"
        } font-semibold uppercase  !rounded-none w-[50%] text-[12px]`}
      >
        Especificações
      </Button>
    </div>
  );
}

export default Toggle;

import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";
import { useUI } from "../../sdk/useUI.ts";


function ChangeGender() {
  const { gender } = useUI()

  return  (
    <div class="bg-white flex p-2 w-min rounded-[37px]">
      <Button onClick={() => {gender.value = "Masculino"}} class={`${gender.value === "Masculino" ? "bg-black text-white" : "bg-white text-black"} rounded-[30px]`}>
        Masculino
      </Button>
      <Button onClick={() => {gender.value = "Feminino"}} class={`${gender.value === "Feminino" ? "bg-black text-white" : "bg-white text-black"} rounded-[30px]`}>
        Feminino
      </Button>
    </div>
  );
}

export default ChangeGender;
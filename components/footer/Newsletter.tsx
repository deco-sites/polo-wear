import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col items-center gap-6 sm:gap-20 p-4 sm:border border-gray-500 sm:flex-row sm:justify-center">
      <div class="flex flex-col gap-2 max-w-[400px] text-center">
        <Text variant="heading-2" tone="default-inverse">
          QUER RECEBER AS NOSSAS NOVIDADES E PROMOÇÕES EXCLUSIVAS?
        </Text>
        <Text
          variant="caption"
          tone="default-inverse"
          class="text-uppercase mt-4"
        >
          Cadastre-se e ganhe <strong>10% Off</strong> na primeira compra.
        </Text>
      </div>
      <form class="flex flex-col items-center gap-2 font-body  text-body w-full sm:w-[408px]">
        <input
          class="py-2 px-3 flex-grow w-full bg-footer rounded bg-gray-200 text-default-inverse border-1 border-default"
          placeholder="Seu nome"
        />
        <input
          className="py-2 px-3 w-full flex-grow bg-footer bg-gray-200 rounded text-default-inverse border-1 border-default"
          placeholder="Seu e-mail"
        />
        <button
          class="py-2 px-3 bg-interactive-inverse rounded w-full bg-black-button text-white"
          type="bgutton" // prevent form's default behavior
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;

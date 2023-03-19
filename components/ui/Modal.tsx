import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useEffect, useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

import Icon from "./Icon.tsx";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

export type Props = JSX.IntrinsicElements["dialog"] & {
  title?: string;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  type?: "menu" | "search" | "cart" | "user";
  onClose?: () => Promise<void> | void;
  loading?: "lazy" | "eager";
};

const styles = {
  "sidebar-right": "animate-slide-left sm:ml-auto backdrop",
  "sidebar-left": "animate-slide-right backdrop",
  center: "",
};

const Modal = ({
  open,
  title,
  mode = "sidebar-right",
  type = "menu",
  onClose,
  children,
  loading,
  ...props
}: Props) => {
  const lazy = useSignal(false);
  const ref = useRef<HTMLDialogElement>(null);
  const variant = styles[mode];

  useEffect(() => {
    if (ref.current?.open === true && open === false) {
      document.getElementsByTagName("body").item(0)?.removeAttribute(
        "no-scroll",
      );
      ref.current.close();
    } else if (ref.current?.open === false && open === true) {
      document.getElementsByTagName("body").item(0)?.setAttribute(
        "no-scroll",
        "",
      );
      ref.current.showModal();
      lazy.value = true;
    }
  }, [open]);

  return (
    <dialog
      {...props}
      ref={ref}
      class={`bg-transparent p-0 m-0 max-w-full sm:max-w-lg w-full max-h-full h-full ${variant} ${
        props.class ?? ""
      }`}
      onClick={(e) =>
        (e.target as HTMLDialogElement).tagName === "DIALOG" && onClose?.()}
    >
      {type === "menu" &&
        (
          <section class="pt-6 bg-menu-slider text-white h-full flex flex-col">
            <header class="flex text-white px-4 justify-between items-center pb-6 ">
              <div class="flex gap-5 items-center font-medium">
                <span>&#8865;</span>
                <div>
                  <p>Olá, Bem-vindo(a)!</p>
                  <p>
                    <a>Entre</a> ou <a>Cadastre-se</a>
                  </p>
                </div>
              </div>
              <Button variant="icon" onClick={onClose}>
                <Icon
                  class="text-white"
                  id="XMark"
                  width={20}
                  height={20}
                  strokeWidth={2}
                />
              </Button>
            </header>
            <div class="overflow-y-auto h-full flex flex-col">
              {loading === "lazy" ? lazy.value && children : children}
            </div>
          </section>
        )}

      {type === "search" &&
        (
          <section class="relative h-full bg-default flex flex-col scrollbar-none">
            <div class="overflow-y-auto h-full flex flex-col scrollbar-none">
              {loading === "lazy" ? lazy.value && children : children}
            </div>
          </section>
        )}

      {type === "cart" &&
        (
          <section class="pt-6 text-white h-full bg-default flex flex-col">
            <header class="flex gap-4 text-white px-4 justify-between items-center pb-6 ">
              <Button variant="icon" onClick={onClose}>
                <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
              </Button>
              <p class="text-black uppercase tracking-widest text-[13px] text-common">
                Voltar
              </p>
              <div class=" border-b-[0.5px] bg-black box-border w-full "></div>
              <p class="text-black uppercase font-bold tracking-widest text-[13px]">
                Carrinho
              </p>
            </header>
            <div class="overflow-y-auto h-full flex flex-col">
              {loading === "lazy" ? lazy.value && children : children}
            </div>
          </section>
        )}

      {type === "user" &&
        (
          <section class="fixed top-[100px] text-xs text-center right-[8%] py-5 px-14 text-black bg-white flex flex-col">
            <p>Seja Bem Vindo(a)</p>
            <a href="#" class="italic">Entrar</a>
          </section>
        )}
    </dialog>
  );
};

export default Modal;

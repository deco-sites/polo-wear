// Dps deixar montável pelo cliente
import Icon from "./Icon.tsx";

function Filter() {
  return (
    <div class="flex flex-col w-full px-10">
      <div class="p-2 bg-[#32332A] rounded-t-md">
        <h2 class="text-white text-center text-[22px] font-medium">Filtro</h2>
      </div>
      <div class="group px-2 py-4 flex flex-col bg-white border-b-1 border-[#F3F3F3] font-medium cursor-pointer">
        <div class="w-full flex justify-between items-center">
          <p>Feminino</p>
          <Icon
            class="cursor-pointer"
            id="Plus"
            width={24}
            height={24}
            strokeWidth={1}
          />
        </div>
        <div class="hidden group-hover:block max-h-56 p-4 bg-white overflow-auto">
          <ul>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="group px-2 py-4 flex flex-col bg-white border-b-1 border-[#F3F3F3] font-medium cursor-pointer">
        <div class="w-full flex justify-between items-center">
          <p>Tipo de produto</p>
          <Icon
            class="cursor-pointer"
            id="Plus"
            width={24}
            height={24}
            strokeWidth={1}
          />
        </div>
        <div class="hidden group-hover:block max-h-56 p-4 bg-white overflow-auto">
          <ul>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="group px-2 py-4 flex flex-col bg-white border-b-1 border-[#F3F3F3] font-medium cursor-pointer">
        <div class="w-full flex justify-between items-center">
          <p>Gênero</p>
          <Icon
            class="cursor-pointer"
            id="Plus"
            width={24}
            height={24}
            strokeWidth={1}
          />
        </div>
        <div class="hidden group-hover:block max-h-56 p-4 bg-white overflow-auto">
          <ul>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="group px-2 py-4 flex flex-col bg-white border-b-1 border-[#F3F3F3] font-medium cursor-pointer">
        <div class="w-full flex justify-between items-center">
          <p>Cor</p>
          <Icon
            class="cursor-pointer"
            id="Plus"
            width={24}
            height={24}
            strokeWidth={1}
          />
        </div>
        <div class="hidden group-hover:block max-h-56 p-4 bg-white overflow-auto">
          <ul>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="group px-2 py-4 flex flex-col bg-white border-b-1 border-[#F3F3F3] font-medium cursor-pointer">
        <div class="w-full flex justify-between items-center">
          <p>Tamanho</p>
          <Icon
            class="cursor-pointer"
            id="Plus"
            width={24}
            height={24}
            strokeWidth={1}
          />
        </div>
        <div class="hidden group-hover:block max-h-56 p-4 bg-white overflow-auto">
          <ul>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="group px-2 py-4 flex flex-col bg-white border-b-1 border-[#F3F3F3] font-medium cursor-pointer">
        <div class="w-full flex justify-between items-center">
          <p>Faixa de preço</p>
          <Icon
            class="cursor-pointer"
            id="Plus"
            width={24}
            height={24}
            strokeWidth={1}
          />
        </div>
        <div class="hidden group-hover:block max-h-56 p-4 bg-white overflow-auto">
          <ul>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
            <li class="py-2 flex">
              <input type="checkbox" class="mr-1" />
              <p>teste</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;

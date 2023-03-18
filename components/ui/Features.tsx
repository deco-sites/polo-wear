import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights({ features }: Props) {
  return (
    <Container class="p-6 sm:px-0 sm:py-10 bg-gray-100">
      <div class="flex flex-row justify-between items-center gap-6 md:p-4">
        {features.map(({ icon: id = "Truck", title }) => (
          <div class="flex flex-col items-center">
            <Icon id={id} width={30} height={30} strokeWidth={2} />
            <Text
              variant="heading-4"
              class="text-center text-uppercase font-bold mt-2 leading-3"
            >
              {title}
            </Text>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default FeatureHighlights;

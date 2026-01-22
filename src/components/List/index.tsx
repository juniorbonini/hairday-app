import { Icon } from "../ButtonIcon";
import { TurnPeriod } from "../PeriodCard/Content/TurnPeriod";

// @ts-expect-error: module declaration for SVG React import
import SunHorizon from "@/assets/icons/sun-horizon.svg?react";

export function List() {
  return (
    <div className="flex flex-col gap-6">
      <TurnPeriod
        title="Manhã"
        range="9h-12h"
        icon={<Icon svg={SunHorizon} className="w-5 h-5" />}
      />

      <TurnPeriod
        title="Tarde"
        range="13h-18h"
        icon={<Icon svg={SunHorizon} className="w-5 h-5" />}
      />
      <TurnPeriod
        title="Noite"
        range="19h-21h"
        icon={<Icon svg={SunHorizon} className="w-5 h-5" />}
      />
    </div>
  );
}

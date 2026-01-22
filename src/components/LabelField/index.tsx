import { useRef } from "react";
import { Icon } from "../ButtonIcon";
import { Text } from "../Text";
// @ts-expect-error: module declaration for SVG React import
import DateIcon from '@/assets/icons/calendar-blank.svg?react'

// @ts-expect-error: module declaration for SVG React import
import ArrowDown from '@/assets/icons/arrow-down.svg?react'

export function LabelField() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOpenPicker() {
    inputRef.current?.showPicker();
  }

  return (
    <label className="flex flex-col gap-3">
      <Text variant="cataraman-title-md">Data</Text>

      <div
        onClick={handleOpenPicker}
        className="w-85 border border-gray-500 rounded-xl p-3 flex items-center gap-2 cursor-pointer bg-transparent"
      >
        <Icon svg={DateIcon} className="w-5 h-5" />

        <input
          ref={inputRef}
          type="date"
          min="2026-01-22"
          className="
            bg-transparent
            cursor-pointer
            w-full
            outline-none
            text-gray-200
            [&::-webkit-calendar-picker-indicator]:hidden
            [&::-webkit-inner-spin-button]:hidden
            [&::-webkit-outer-spin-button]:hidden
          "
        />

        <Icon
          variant="secundary"
          svg={ArrowDown}
          className="w-5 h-5 ml-auto fill-gray-400"
        />
      </div>
    </label>
  );
}

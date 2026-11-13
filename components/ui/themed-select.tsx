"use client"

import { ChevronDown, Check } from "lucide-react"
import { Select } from "@base-ui/react/select"
import { cn } from "@/lib/utils"

type ThemedSelectProps = {
  id: string
  name: string
  value?: string
  defaultValue?: string
  options: { value: string; label: string }[]
  onValueChange?: (value: string) => void
  placeholder?: string
  required?: boolean
  triggerClassName?: string
}

export function ThemedSelect({
  id,
  name,
  value,
  defaultValue,
  options,
  onValueChange,
  placeholder,
  required = false,
  triggerClassName,
}: ThemedSelectProps) {
  return (
    <Select.Root
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      required={required}
      onValueChange={(nextValue) => {
        if (typeof nextValue === "string") onValueChange?.(nextValue)
      }}
      items={options.map((option) => ({ value: option.value, label: option.label }))}
    >
      <Select.Trigger
        className={cn(
          "flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm text-foreground outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/25",
          triggerClassName,
        )}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="shrink-0 text-muted-foreground">
          <ChevronDown className="h-4 w-4" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner className="z-[100] outline-none" sideOffset={6}>
          <Select.Popup className="glass-strong max-h-[var(--available-height)] min-w-[var(--anchor-width)] overflow-y-auto rounded-xl border border-white/15 p-1.5 text-foreground shadow-2xl shadow-black/50 outline-none">
            <Select.List>
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="flex min-h-10 cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2 text-sm text-muted-foreground outline-none transition data-[highlighted]:bg-primary/15 data-[highlighted]:text-foreground data-[selected]:text-primary"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check className="h-4 w-4 text-primary" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}

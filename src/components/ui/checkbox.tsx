import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(event.target.checked);
    };

    return (
      <div className={cn("relative inline-flex items-center", className)}>
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          className="peer sr-only"
          {...props}
        />
        <div
          className={cn(
            "h-full w-full rounded border border-[#dfe3ec] bg-white transition-colors",
            "peer-checked:bg-[#3b82f6] peer-checked:border-[#3b82f6]",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-[#3b82f6]",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            "cursor-pointer flex items-center justify-center"
          )}
          onClick={() => {
            const input = ref as React.RefObject<HTMLInputElement>;
            if (input?.current) {
              input.current.click();
            }
          }}
        >
          {checked && (
            <svg
              className="h-3/5 w-3/5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };

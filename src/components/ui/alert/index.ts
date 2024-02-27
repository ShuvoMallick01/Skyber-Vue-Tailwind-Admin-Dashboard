import { type VariantProps, cva } from "class-variance-authority";

export { default as Alert } from "./Alert.vue";
export { default as AlertTitle } from "./AlertTitle.vue";
export { default as AlertDescription } from "./AlertDescription.vue";

export const alertVariants = cva(
  "relative w-full rounded border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        normal: "text-black bg-black/15 text-start border-black",
        filled: "text-white bg-black",
        outline: "text-black bg-white border-black outline-none",
      },

      color: {
        primary:
          "bg-primary/15 text-primary font-semibold text-sm border-.6 border-primary ",
        info: "bg-info/15 text-info font-semibold text-sm border-.6 border-info",
        success:
          "bg-success/15 text-success font-semibold text-sm border-.6 border-success",
        warning:
          "bg-warning/15 text-warning font-semibold text-sm border-.6 border-warning",
        error:
          "bg-error/15 text-error font-semibold text-sm border-.6 border-error",
      },
    },

    compoundVariants: [
      // Filled Variant
      {
        variant: "filled",
        color: "primary",
        class: "text-white bg-primary",
      },
      {
        variant: "filled",
        color: "info",
        class: "text-white bg-info",
      },
      {
        variant: "filled",
        color: "success",
        class: "text-white bg-success",
      },
      {
        variant: "filled",
        color: "warning",
        class: "text-white bg-warning",
      },
      {
        variant: "filled",
        color: "error",
        class: "text-white bg-error",
      },

      // Translucent Buttons
      {
        variant: "outline",
        color: "primary",
        class: "text-primary bg-white border-primary outline-none ",
      },
      {
        variant: "outline",
        color: "info",
        class: "text-info bg-white border-info outline-none",
      },
      {
        variant: "outline",
        color: "success",
        class: "text-success bg-white border-success outline-none",
      },
      {
        variant: "outline",
        color: "warning",
        class: "text-warning bg-white border-warning outline-none",
      },
      {
        variant: "outline",
        color: "error",
        class: "text-error bg-white border-error outline-none",
      },
    ],

    defaultVariants: {
      variant: "normal",
      color: "primary",
    },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;

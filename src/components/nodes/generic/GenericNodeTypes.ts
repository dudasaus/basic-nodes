import type { FunctionComponent } from "react";
import * as z from "zod";

export const handleTypeRegistry = z.registry<{ name: string; color: string }>();

export const stringHandleType = z.coerce.string().register(handleTypeRegistry, {
  name: "String",
  color: "black",
});
export const numberHandleType = z.coerce.number().register(handleTypeRegistry, {
  name: "Number",
  color: "red",
});

export interface GenericHandleConfig {
  id: string;
  label: string;
  type: z.ZodType;
  inputComponent?: FunctionComponent<{ onChange: (value: any) => void }>;
}

export interface GenericNodeConfig {
  label: string;
  inputs: GenericHandleConfig[];
  outputs: GenericHandleConfig[];
}

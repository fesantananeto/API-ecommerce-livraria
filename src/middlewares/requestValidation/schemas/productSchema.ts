import { array, number, object, string } from "yup";

export const productSchemas = {
  newProduct: {
    body: object({
      name: string().required(),
      description: string().required(),
      price: number().required(),
      category: array().of(string()),
      inventory: number().required(),
    }),
  },
};

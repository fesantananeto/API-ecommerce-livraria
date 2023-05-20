import { array, number, object, string } from "yup";

export const productSchemas = {
  findBycategory: {
    params: object({
      category: string().required(),
    }),
  },
  newProduct: {
    body: object({
      name: string().required(),
      description: string().required(),
      price: number().required(),
      category: array().of(string()),
      inventory: number().required(),
    }),
  },
  updateProduct: {
    params: object({
      id: number().required(),
    }),
    body: object({
      name: string().optional(),
      description: string().optional(),
      price: number().optional(),
      category: array().of(string()).optional(),
      inventory: number().optional(),
    }),
  },
  onlyIdRequired: {
    params: object({
      id: number().required(),
    }),
  },
};

import * as yup from 'yup';

export type AddProductForm = {
  image?: File;
  name: string;
  medicalName: string;
  manufacturer: string;
  dci: string;
  available: boolean;
  description: string;
  rangeId: string;
  // attachment: string;
  wholeSalePrice: number;
  pharmacyPrice: number;
  publicPrice: number;
};

export type AddRangeForm = {
  name: string;
};

export type AddSampleForm = {
  productId: string;
};

export type AddOrderItemsForm = {
  productId: string;
  quantity: number;
  unitQuantity: number;
};

export type AddOrderForm = {
  clientId: string;
  sum: string;
  comment: string;
  voucher: number;
  contact: string;
  supplierId: string;
};

export type AddInputForm = {
  date: string;
  externalReference: string;
  ug: boolean;
  inputItemsRequests: AddInputItemForm[];
};

export type AddInputItemForm = {
  productId: string;
  quantity: number;
};

export const AddInputItemFormSchema = yup.object().shape({
  productId: yup.string().required(),
  quantity: yup.string().required(),
});

export const addInputFormSchema = yup.object().shape({});

export const addOrderItemsFormSchema = yup.object().shape({
  productId: yup.string().required(),
  quantity: yup.number().required(),
  unitQuantity: yup.number().required(),
});

export const addOrderFormSchema = yup.object().shape({
  clientId: yup.string().required(),
  comment: yup.string().required(),
  contact: yup.string().required(),
  supplierId: yup.string().required(),
});

export const addSampleFormSchema = yup.object().shape({
  productId: yup.string().required(),
  comment: yup.string().required(),
});

export const addRangeFormSchema = yup.object().shape({
  name: yup.string().required(),
});

export const addProductFormSchema = yup.object().shape({
  // image: yup.mixed().required(),
  name: yup.string().required(),
  medicalName: yup.string().required(),
  manufacturer: yup.string().required(),
  dci: yup.string().required(),
  available: yup.boolean().required(),
  description: yup.string().required(),
  rangeId: yup.string().required(),
  // attachment: yup.string().required(),
  wholeSalePrice: yup.number().required().positive().integer(),
  pharmacyPrice: yup.number().required().positive().integer(),
  publicPrice: yup.number().required().positive().integer(),
});

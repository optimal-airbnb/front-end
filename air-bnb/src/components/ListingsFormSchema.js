import * as yup from "yup";

const formSchema = yup.object().shape({
  location: yup.string().required("Location is required"),
  lengthStay: yup.string().required("Length of stay is required"),
  bedrooms: yup.number().positive().nullable(true),
  bathrooms: yup.number(),
  type: yup.string().required("Type is a required"),
});

export default formSchema;

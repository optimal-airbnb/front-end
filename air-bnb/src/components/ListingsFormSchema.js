import * as yup from "yup";

export const formSchema = yup.object().shape({
  Borough: yup.string().required("Borough is required"),
  Neighbourhood: yup.string().required("Neighborhood is required"),
  Room_type: yup.string().required("Room type is required"),
  Minimum_nights: yup
    .number()
    .typeError("Enter valid number")
    .min(1, "Cannot be less than 1")
    .max(365, "Cannot be more than 365"),
  Availability_365: yup
    .number()
    .typeError("Enter valid number")
    .min(1, "Cannot be less than 1")
    .max(365, "Cannot be more than 365"),
});

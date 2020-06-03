export const getElementData = (
  key: string,
  label: string,
  placeholder: string,
  validators: Object,
  errors: Object | null,
  value = ""
) => {
  let eleConfig = null;

  eleConfig = {
    key: key,
    placeholder: placeholder,
    value: value,
    label: label,
  };

  return {
    elementConfig: eleConfig,
    validators: validators,
    errors: errors,
    value: "",
    valid: false,
    touched: false,
  };
};
export interface EleConfig {
  key?: string;
  placeholder?: string;
  value?: string;
  label?: string;
}
export interface FormField {
  elementConfig: EleConfig;
  validators?: Object | null;
  errors?: Object | null;
  value?: string;
  valid: boolean;
  touched?: boolean;
}

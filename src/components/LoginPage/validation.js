export default function(formValues) {
  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
  const errors = {};

  if (!formValues.email) {
    errors.email = "Enter Email";
  } else if (!emailPattern.test(formValues.email)) {
    errors.email = "Invalid Email";
  }

  if (!formValues.password) {
    errors.password = "Enter Password";
  }

  return errors;
}

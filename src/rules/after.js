import { parse, isValid, isAfter, isEqual } from 'date-fns';

export default (value, [otherValue, inclusion, format]) => {
  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parse(value, format, new Date());
  otherValue = parse(otherValue, format, new Date());

  // if either is not valid.
  if (! isValid(value) || ! isValid(otherValue)) {
    return false;
  }

  return isAfter(value, otherValue) || (inclusion && isEqual(value, otherValue));
};
import type {
  FieldValues,
  RegisterOptions,
  UseFormWatch,
} from 'react-hook-form';

import type { Field } from '@/types';

class FormUtil {
  fixTitleIndex(title?: string, index?: number): string {
    if (title) return title.replace('{*}', String(index));
    return '';
  }

  countableInput = (inputs: Field[], index: number): Field[] => {
    return inputs.map((input) => ({
      ...input,
      label: this.fixTitleIndex(input.label, index + 1),
      name: this.fixTitleIndex(input.name, index),
    }));
  };

  generateRule = (
    validation?: string,
    watch?: UseFormWatch<FieldValues>
  ): any => {
    if (validation && typeof validation === 'string') {
      const validations = validation.split('|').map((i) => i.split(':'));
      if (validations.length) {
        const rule: Partial<RegisterOptions> = {};
        validations.forEach(([key, val]) => {
          if (key === 'number') {
            rule.valueAsNumber = true;
          } else if (key === 'required') {
            rule.required = 'This field is required.';
          } else if (key === 'email') {
            rule.pattern = {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address.',
            };
          } else if (key === 'min') {
            if (rule.valueAsNumber) {
              rule.min = {
                value: Number(val),
                message: `The minimum is ${val}.`,
              };
            } else {
              rule.minLength = {
                value: Number(val),
                message: `Must be at least ${val} characters.`,
              };
            }
          } else if (key === 'max') {
            if (rule.valueAsNumber) {
              rule.max = {
                value: Number(val),
                message: `The maximum is ${val}.`,
              };
            } else {
              rule.maxLength = {
                value: Number(val),
                message: `Must be a maximum of ${val} characters.`,
              };
            }
          } else if (key === 'deps') {
            const deps = val?.split(',') || [];
            if (watch && deps.length) {
              const watchFields = watch(deps);
              rule.deps = deps.filter((_, index) => watchFields[index]);
            }
          } else if (key === 'match') {
            if (watch && val) {
              rule.validate = {
                match: (v) => v === watch(val) || `Repeat ${val} is wrong.`,
              };
            }
          }
        });
        return rule;
      }
    }
    return null;
  };
}

const formUtil = new FormUtil();
export { formUtil };

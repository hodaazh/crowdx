import { useCallback, useEffect } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';

import type { Field } from '@/types';

type FieldsT = Field | { fields: Field[]; id: string };

type IProps = {
  onSubmit?: (values: any) => void;
  fields: FieldsT[];
  validationFields?: FieldsT[];
  defaultValue?: Record<string, any>;
  shouldUnregister?: boolean;
  defaultValues?: Record<string, any>;
};

const useForm = ({
  fields = [],
  onSubmit = () => false,
  defaultValue,
  defaultValues,
  shouldUnregister = false,
}: IProps) => {
  const initialValues = {} as any;

  const checkFields = useCallback(
    (
      initial: any,
      cbItem: (item: Field, lastData: any) => any,
      initialData = fields
    ) => {
      function check(data: FieldsT[], newData: any) {
        const instance = {
          data: newData,
        };
        data.forEach((item) => {
          if ('fields' in item) {
            instance.data[item.id] = newData[item.id] || {};
            check(item.fields, instance.data[item.id]);
          } else {
            const itemValue = cbItem(item, instance.data[item.name]);
            if (itemValue !== null && itemValue !== undefined)
              instance.data[item.name] = itemValue;
          }
        });
      }
      check(initialData, initial);
      return initial;
    },
    [fields]
  );

  checkFields(initialValues, () => {
    return '';
  });

  const form = useReactHookForm({
    mode: 'onSubmit',
    defaultValues: defaultValues || initialValues,
    shouldUnregister,
  });

  const handleSubmit = form.handleSubmit(() => {
    const newValues = form.getValues();
    checkFields(newValues, (item, lastData) => {
      if (item.value) {
        return item.value(lastData);
      }
      return lastData;
    });
    onSubmit(newValues);
  });

  useEffect(() => {
    Object.keys(defaultValue || {}).forEach((item) => {
      if (item in initialValues && defaultValue && defaultValue[item]) {
        form.setValue(item, defaultValue[item], { shouldValidate: true });
      }
    });
  }, [defaultValue]);

  return { form, handleSubmit };
};

export { useForm };

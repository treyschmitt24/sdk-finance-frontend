import { ITableFilter } from '@/types/interfaces/TableFilters.interface';
import { PERSON_TYPES } from '@/constants';

export const contractsFilters: ITableFilter[] = [
  {
    name: 'filter.contract_type',
    label: 'filter.contract_type',
    type: 'Enumeration',
    param: 'personTypes',
    placeholder: 'placeholder.select.select_type',
    options: PERSON_TYPES,
  },
];

import {LocationQueryValue} from 'vue-router';

export type Filter = {
  id: string;
  name: string;
  options: string[];
  selected: Set<LocationQueryValue | LocationQueryValue[]>;
};

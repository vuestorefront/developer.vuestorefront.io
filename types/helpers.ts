enum BaseEnum {}

export type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type KeyOfEnum<E = BaseEnum> = keyof {
  [key in E]: string;
}

export type RecordEnum<K = BaseEnum, V = string> = {
  [key in K]: V;
}

export type EnumRecord<E = BaseEnum, K = string> = Record<KeyOfEnum<E>, K>

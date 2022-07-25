enum BaseEnum {}

export type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type KeyOfEnum<E = BaseEnum> = {
  [key in E]: string;
}

export type EnumRecord<E, K = string> = Record<KeyOfEnum<E>, K>

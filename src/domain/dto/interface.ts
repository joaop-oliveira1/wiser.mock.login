export interface DataTransferObject<T> {
  toObject: () => T;
  toString: () => string;
}

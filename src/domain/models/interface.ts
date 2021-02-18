export interface Model<T> {
  toObject: () => T;
  toString: () => string;
}

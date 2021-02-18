/**
 * @description cast all keys or fields of an object to optional fields
 */
export type Optional<T> = { [key in keyof T]?: T[key] };

export const useToken = (): globalThis.Ref<string | null> =>
  useState<string | null>('token', () => null);
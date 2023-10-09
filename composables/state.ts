export type User ={
  token: string | null,
  uid: string | null,
  userName: string | null,
  email: string | null,
}

export const useToken = (): globalThis.Ref<User | null> =>
  useState<User | null>('token', () => {
    return {
      token: null,
      uid: null,
      userName: null,
      email: null,
    };
});



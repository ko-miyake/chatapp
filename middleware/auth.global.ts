import { RouteLocationNormalized } from "vue-router";

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  // loginページの場合なにもしません
  if(to.path == '/login') return;

  const { checkAuthState, token } = useAuth();
  await checkAuthState();

//   console.log(token.value);
  // tokenがなければログインページにリダイレクト
  if (!token.value.token) return await navigateTo('/login', { replace: true });
});
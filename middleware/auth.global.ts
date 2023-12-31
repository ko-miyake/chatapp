import { RouteLocationNormalized } from "vue-router";

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  // loginページの場合なにもしません
  if(to.path == '/login' || to.path == '/register/' || to.path == '/register') return;

  const { checkAuthState, token } = useAuth();
  await checkAuthState();

  // tokenがなければログインページにリダイレクト
  if (!token.value.token) return await navigateTo('/login', { replace: true });
});
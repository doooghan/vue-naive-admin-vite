import { usePermissionStore } from '../../store/modules/permission';
import { useUserStore } from '../../store/modules/user';
import { toLogin } from '../../utils/auth';
import { getToken, removeToken } from '../../utils/token';
import { NOT_FOUND_ROUTE } from '../routes';

const WHITE_LIST = ['/login'];

export function createPermissionGuard(router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    const permissionStore = usePermissionStore();
    const token = getToken();
    if (token) {
      if (to.path === 'login') {
        next({ path: '/' });
      } else {
        if (userStore.userId) {
          // 拿到用户信息
          next();
        } else {
          await userStore.getUserInfo().catch((error) => {
            removeToken();
            toLogin();
            $message.error(error.message || '获取用户信息失败！');
            return;
          });
          const accessRouts = permissionStore.generateRoutes(userStore.role);
          accessRouts.forEach((route) => {
            !router.hasRoute(route.name) && router.addRoute(route);
          });
          router.addRoute(NOT_FOUND_ROUTE);
          next({ ...to, replace: true });
        }
      }
    } else {
      if (WHITE_LIST.includes(to.path)) {
        next();
      } else {
        next({ path: '/login' });
      }
    }
  });
}

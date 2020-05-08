import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import {setTitle} from '@/libs/util'
import {getToken, getAllMenuList,getCompanyId} from "@/utils/storages/userStorage"
import {clearAll} from "@/utils/storages/";
import iView from 'iview'
import {TOKEN_ERROR_CODE} from "_s/errorCodeMessage";

// 全局处理router catch
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
});
// 登录页面
const LOGIN_PAGE_NAME = 'login';
// 忘记密码页面
const CHANGE_PASSWORD_PAGE_NAME = 'ForgetPassword';
// 无权限页面
const NO_PERMISSION_PAGE = '/401';
// 首页

/**
 * @Description 权限校验
 * @Param path 路由地址
 * @return
 **/
export const checkPermission = (to) => {
  // 过滤掉不需要校验权限的路由地址
  if (to.meta && to.meta.permission) {
    return true;
  }

  const allMenuList = getAllMenuList() || [];
  return allMenuList.some(menu => menu.url === to.path);
}

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  const userToken = getToken();
  if (!userToken) { // 没有token
    if (to.query && to.query.ticket) { // 从别的系统带ticket进来
      next();
    } else if (to.name != LOGIN_PAGE_NAME) { // 未登录且要跳转的页面不是登录页
      // 忘记密码
      if (to.name == CHANGE_PASSWORD_PAGE_NAME) {
        next();
      } else {
        next({
          name: LOGIN_PAGE_NAME // 跳转到登录页
        });
      }
    } else {
      next();
    }
  } else if (userToken == TOKEN_ERROR_CODE) { // 登录token无效或超时
    // 清除缓存
    clearAll();
    // 登录失效，跳转登录页面
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    });
  } else {
    if(to.meta.isZT){
      if(!getCompanyId()){
        iView.Modal.warning({
          render: (h) => {
            return h('p',{},'管理员暂无法使用审批，请在中台添加人员公司归属，并确认所属公司已开启HRM服务')
          }
        })
        return
      }
    }

    if (!checkPermission(to)) { // 权限校验
      next({path: NO_PERMISSION_PAGE})
    } else {
      next();
    }
  }
})

router.afterEach(to => {
  if (router.app.$store) {
    // 记录路由改变
    router.app.$store.commit("setCurrentPath", to.path);
    const canBackward = router.history.current.matched && router.history.current.matched.length > 2;
    router.app.$store.commit("setForwardBackwardInfo", {canForward: true, canBackward});
  }

  iView.LoadingBar.finish();
  setTitle(to, router.app);
  window.scrollTo(0, 0);
})

export default router

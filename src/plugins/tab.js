// 页签（标签视图）操作工具：封装常用的标签页刷新、关闭、打开、批量关闭操作，
// 通过与路由和 Vuex 模块（tagsView）联动，保持页面导航状态的一致性。
import store from '@/store'
import router from '@/router';

export default {
  // 刷新当前 tab 页签：删除缓存的视图并通过 /redirect 重新进入当前路由
  refreshPage(obj) {
    const { path, query, matched } = router.currentRoute;
    if (obj === undefined) {
      matched.forEach((m) => {
        if (m.components && m.components.default && m.components.default.name) {
          if (!['Layout', 'ParentView'].includes(m.components.default.name)) {
            obj = { name: m.components.default.name, path: path, query: query };
          }
        }
      });
    }
    return store.dispatch('tagsView/delCachedView', obj).then(() => {
      const { path, query } = obj
      router.replace({
        path: '/redirect' + path,
        query: query
      })
    })
  },
  // 关闭当前 tab 并打开新页面
  closeOpenPage(obj) {
    store.dispatch("tagsView/delView", router.currentRoute);
    if (obj !== undefined) {
      return router.push(obj);
    }
  },
  // 关闭指定 tab（默认当前），并跳转到最后一个路径或首页
  closePage(obj) {
    if (obj === undefined) {
      return store.dispatch('tagsView/delView', router.currentRoute).then(({ lastPath }) => {
        return router.push(lastPath || '/');
      });
    }
    return store.dispatch('tagsView/delView', obj);
  },
  // 关闭所有 tab
  closeAllPage() {
    return store.dispatch('tagsView/delAllViews');
  },
  // 关闭左侧 tab
  closeLeftPage(obj) {
    return store.dispatch('tagsView/delLeftTags', obj || router.currentRoute);
  },
  // 关闭右侧 tab
  closeRightPage(obj) {
    return store.dispatch('tagsView/delRightTags', obj || router.currentRoute);
  },
  // 关闭其他 tab（只保留当前）
  closeOtherPage(obj) {
    return store.dispatch('tagsView/delOthersViews', obj || router.currentRoute);
  },
  // 添加新 tab 并导航过去
  openPage(title, url) {
    var obj = { path: url, meta: { title: title } }
    store.dispatch('tagsView/addView', obj);
    return router.push(url);
  },
  // 更新已访问的 tab（标题等）
  updatePage(obj) {
    return store.dispatch('tagsView/updateVisitedView', obj);
  }
}

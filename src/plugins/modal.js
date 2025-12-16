// 模态交互插件：汇总 Element UI 的消息、通知、确认框与全局 Loading 遮罩，
// 提供统一的调用入口，减少页面代码重复（如 MessageBox.confirm 等）。
import { Message, MessageBox, Notification, Loading } from 'element-ui'

let loadingInstance;  // 记录当前的 Loading 遮罩实例，便于关闭

export default {
  // 消息提示（信息）
  msg(content) {
    Message.info(content)
  },
  // 错误消息（红色提示）
  msgError(content) {
    Message.error(content)
  },
  // 成功消息（绿色提示）
  msgSuccess(content) {
    Message.success(content)
  },
  // 警告消息（黄色提示）
  msgWarning(content) {
    Message.warning(content)
  },
  // 弹出提示（信息）
  alert(content) {
    MessageBox.alert(content, "系统提示")
  },
  // 错误提示弹窗
  alertError(content) {
    MessageBox.alert(content, "系统提示", { type: 'error' })
  },
  // 成功提示弹窗
  alertSuccess(content) {
    MessageBox.alert(content, "系统提示", { type: 'success' })
  },
  // 警告提示弹窗
  alertWarning(content) {
    MessageBox.alert(content, "系统提示", { type: 'warning' })
  },
  // 通知（信息）
  notify(content) {
    Notification.info(content)
  },
  // 错误通知
  notifyError(content) {
    Notification.error(content);
  },
  // 成功通知
  notifySuccess(content) {
    Notification.success(content)
  },
  // 警告通知
  notifyWarning(content) {
    Notification.warning(content)
  },
  // 确认窗体：返回 Promise（点击确定/取消分别 resolve/reject）
  confirm(content) {
    return MessageBox.confirm(content, "系统提示", {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: "warning",
    })
  },
  // 输入窗体：返回 Promise，获取输入值
  prompt(content) {
    return MessageBox.prompt(content, "系统提示", {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: "warning",
    })
  },
  // 打开全局遮罩层（Loading）
  loading(content) {
    loadingInstance = Loading.service({
      lock: true,
      text: content,
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    })
  },
  // 关闭遮罩层
  closeLoading() {
    loadingInstance.close();
  }
}

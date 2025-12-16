// 浏览器缓存工具：提供会话级（sessionStorage）与本地级（localStorage）两套简易读写方法
// 支持字符串与 JSON 的读写，常用于请求防重复、表单草稿与临时状态保存。

const sessionCache = {
  set (key, value) {                        // 写入字符串值到 sessionStorage
    if (!sessionStorage) {
      return
    }
    if (key != null && value != null) {
      sessionStorage.setItem(key, value)
    }
  },
  get (key) {                               // 读取字符串值
    if (!sessionStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return sessionStorage.getItem(key)
  },
  setJSON (key, jsonValue) {                // 写入 JSON（自动 stringify）
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue))
    }
  },
  getJSON (key) {                           // 读取 JSON（自动 parse）
    const value = this.get(key)
    if (value != null) {
      return JSON.parse(value)
    }
  },
  remove (key) {                            // 删除指定键
    sessionStorage.removeItem(key);
  }
}

const localCache = {
  set (key, value) {                        // 写入字符串值到 localStorage（长期存储）
    if (!localStorage) {
      return
    }
    if (key != null && value != null) {
      localStorage.setItem(key, value)
    }
  },
  get (key) {                               // 读取字符串值
    if (!localStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return localStorage.getItem(key)
  },
  setJSON (key, jsonValue) {                // 写入 JSON
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue))
    }
  },
  getJSON (key) {                           // 读取 JSON
    const value = this.get(key)
    if (value != null) {
      return JSON.parse(value)
    }
  },
  remove (key) {                            // 删除指定键
    localStorage.removeItem(key);
  }
}

export default {
  // 会话级缓存（浏览器关闭即清空）
  session: sessionCache,
  // 本地缓存（长期保留）
  local: localCache
}

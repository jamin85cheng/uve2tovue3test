import { use } from 'vue'
import DataDict from '@/utils/dict'
import { getDicts as getDicts } from '@/api/system/dict/data'

function install(app) {
  app.use(DataDict, {
    metas: {
      '*': {
        labelField: 'dictLabel',
        valueField: 'dictValue',
        request(dictMeta) {
          return getDicts(dictMeta.type).then(res => res.data)
        },
      },
    },
  })
}

export default {
  install,
}
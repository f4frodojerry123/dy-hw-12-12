import { createI18n } from 'vue-i18n'
import en from './en'
import cn from './cn'
import Cookies from 'js-cookie'
let localLang = "cn"
if (Cookies.get('localLang')) {
  localLang = Cookies.get('localLang')
}

const i18n = new createI18n({
  legacy: false,
  globalInjection: true,
  locale: localLang, // 语言标识
  messages: {
    en: en,
    cn: cn,
  },
})

export default i18n;
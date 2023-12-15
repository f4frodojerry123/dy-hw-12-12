import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
let recentLinksFromCookie = []
if (Cookies.get('recentLinks')) {
  recentLinksFromCookie = JSON.parse(Cookies.get('recentLinks'))
}
 
// console.log(recentLinksFromCookie);


// let localLanguageCookie = 
export const mainStore = defineStore('main', {
  state: () => {
    return {
      recentLinks: recentLinksFromCookie,
      localLanguage: "cn",
      allData: [
        {
          title: "個人中心",
          show: 1,
          links: [
            "通知",
            "便利貼",
            "職務代理人簽核作業",
            "薪資明細",
            "費用申請作業",
            "績效考核報告"
          ]
        },
        {
          title: "工作事項",
          show: 0,
          links: [
            "工作清單",
            "工作交辦"
          ]
        },
        {
          title: "排班管理",
          show: 0,
          links: [
            "預排班表",
            "班表查詢",
          ],
        },
        {
          title: "帳號管理",
          show: 0,
          links: [
            "設定",
            "通知設定",
            "登入記錄查詢",
            "Google整合設定",
            "Microsoft整合設定",
            "Line整合設定",
            "Wechat整合設定",
          ]
        },
        {
          title: "考勤管理",
          show: 0,
          links: [
            "出勤紀錄",
            "出勤異常明細表",
            "請假作業",
            "銷假記錄",
            "外出登記作業",
            "外出簽到、簽退",
            "假期查詢",
            "請假、出缺勤統計",
            "事先加班申請",
            "補休/調休申請",
          ],
        },
        {
          title: "電子表單",
          show: 0,
          links: [
            "電子表單申請",
            "電子表單簽核",
          ],
        },
      ],
    }
  },
  getters: {

  },
  actions: {
    addRecentLinks(link) {
      
      //尋找recentLinks中是否有重複
      if (this.recentLinks.indexOf(link) == -1) {
        //無重複

        //是否超出5個link
        if (this.recentLinks.length >= 5) {
          //刪除最後一個
          this.recentLinks.pop()
        }
        //從最前面加入
        this.recentLinks.unshift(link)
      } else {
        // 有重複
        let index = this.recentLinks.indexOf(link)
        //刪除重複
        this.recentLinks.splice(index, 1)
        //加到最前
        this.recentLinks.unshift(link)
      }
      Cookies.set('recentLinks',JSON.stringify(this.recentLinks) )
    }
  }
})
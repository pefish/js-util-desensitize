
export default class DesensitizeUtil {

  static sensitiveStrs: string[] = [
    `.*?pass.*?`,
    `.*?token.*?`,
    `.*?key.*?`,
    `.*?secret.*?`,
  ]

  static setSensitiveStr(str: string[]) {
    this.sensitiveStrs = str
  }

  static desensitizeObjectToString(data: {}): string {
    let str = JSON.stringify(data)
    for (let sensitiveStr of this.sensitiveStrs) {
      const reg = new RegExp(`("${sensitiveStr}":").*?(")`, `g`)
      str = str.replace(reg, `$1****$2`)
    }
    return str
  }

  static desensitizeObject(data: {}): {} {
    return JSON.parse(DesensitizeUtil.desensitizeObjectToString(data))
  }
}

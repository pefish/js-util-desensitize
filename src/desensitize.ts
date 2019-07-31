
export default class DesensitizeUtil {

  static sensitiveStr = `pass|token|password|key|pkey`

  static setSensitiveStr (str: string) {
    this.sensitiveStr = str
  }

  static desensitizeObjectToString (data: {}): string {
    const str = JSON.stringify(data)
    const reg = new RegExp(`("(${this.sensitiveStr})":").*?(")`, `g`)
    return str.replace(reg, `$1****$3`)
  }

  static desensitizeObject (data: {}): {} {
    return JSON.parse(DesensitizeUtil.desensitizeObjectToString(data))
  }
}

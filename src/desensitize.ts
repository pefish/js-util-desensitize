
const DEFAULT_SENSITIVESTR = `pass|token|password|key|pkey`

export default class DesensitizeUtil {
  static desensitizeObjectToString (data: {}, sensitiveStr: string = DEFAULT_SENSITIVESTR): string {
    const str = JSON.stringify(data)
    const reg = new RegExp(`("(${sensitiveStr})":").*?(")`, `g`)
    return str.replace(reg, `$1****$3`)
  }

  static desensitizeObject (data: {}, sensitiveStr: string = DEFAULT_SENSITIVESTR): {} {
    return JSON.parse(DesensitizeUtil.desensitizeObjectToString(data, sensitiveStr))
  }
}

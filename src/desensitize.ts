
export default class DesensitizeUtil {
  static desensitizeObjectToString (data: {}): string {
    const str = JSON.stringify(data)
    return str.replace(/("(pass|token|password|key|pkey)":").*?(")/g, `$1****$3`)
  }

  static desensitizeObject (data: {}): {} {
    return JSON.parse(DesensitizeUtil.desensitizeObjectToString(data))
  }
}

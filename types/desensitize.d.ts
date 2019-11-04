export default class DesensitizeUtil {
    static sensitiveStrs: string[];
    static setSensitiveStr(str: string[]): void;
    static desensitizeObjectToString(data: {}): string;
    static desensitizeObject(data: {}): {};
}

import DesensitizeUtil from "./desensitize";
import * as assert from "assert";

declare global {
  namespace NodeJS {
    interface Global {
      logger: any;
    }
  }
}

global.logger = console

describe('desensitize', () => {
  it('desensitizeObjectToString', async function () {
    try {
      const result = DesensitizeUtil.desensitizeObjectToString({
        haha: {
          ab: `dhjds`,
          ty: {
            pass: `haha`
          },
          token: `252`,
        },
        token: `token`
      })
      // global.logger.info(result);
      assert.strictEqual(result, `{"haha":{"ab":"dhjds","ty":{"pass":"****"},"token":"****"},"token":"****"}`)

      const result1 = DesensitizeUtil.desensitizeObjectToString({
        haha: {
          ab: `dhjds`,
          ty: {
            pass: `haha`
          }
        },
        pass: {
          token: {
            pkey: `111`,
          },
          wrtyw: `25462`,
        },
        token: `token`
      })
      // global.logger.info(result1);
      assert.strictEqual(result1, `{"haha":{"ab":"dhjds","ty":{"pass":"****"}},"pass":{"token":{"pkey":"****"},"wrtyw":"25462"},"token":"****"}`)
    } catch (err) {
      global.logger.error(err);
      assert.throws(() => {}, err);
    }
  });

  it('desensitizeObject', async function () {
    try {
      const result = DesensitizeUtil.desensitizeObject({
        haha: {
          ab: `dhjds`,
          ty: {
            pass: `haha`
          }
        },
        token: `token`
      })
      // global.logger.info(result);
      assert.strictEqual(result[`haha`][`ty`][`pass`], `****`)

    } catch (err) {
      global.logger.error(err);
      assert.throws(() => {}, err);
    }
  });
})

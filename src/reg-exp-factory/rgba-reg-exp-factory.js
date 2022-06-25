import { NumberExpression } from "./number-expression.js";

/**
 * RGBA表現に関する正規表現の作成処理を提供します。
 */
class RgbaRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const values = [
            [...Array(3)].map(x => NumberExpression.numericWithMargins),
            NumberExpression.questionablePercentWithMargins
        ];
        return new RegExp(`^\\s*rgba\\(${values.join(",")}\\)\\s*$`, "i");
    }
}

export { RgbaRegExpFactory };
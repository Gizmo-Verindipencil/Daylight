import { ExpressionSetFactory } from "../expression-set-factory.js";
import { RgbaDetector } from "../../../src/detector/rgba-detector.js";

// rgba
// RGBA表現(例: rgba(0, 0, 0, 0%) )に関するテスト

describe("RgbaDetector.detect - rgba_", () => {
    // rgba_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // rgba_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // rgba_3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象の正規表現を作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // rgba_4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象の正規表現を作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // rgba_5:
    it("5: 値がマイナス", () => {
        // テスト対象の正規表現を作成
        const detector = new RgbaDetector();

        // 結果を検証
        const expressions = [
            "rgba(-0,-0,-0,-0)",
            "rgba(-1,-1,-1,-1)",
            "rgba(-2,-2,-2,-2)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // rgba_6:
    it("6: ドット始まりの小数", () => {
        // テスト対象の正規表現を作成
        const detector = new RgbaDetector();

        // 結果を検証
        const expressions = [
            "rgba(.0,.0,.0,.0)",
            "rgba(.1,.1,.1,.1)",
            "rgba(.2,.2,.2,.2)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // rgba_7:
    it("7: その他", () => {
        // テスト対象の正規表現を作成
        const detector = new RgbaDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.rgba);
    });
});
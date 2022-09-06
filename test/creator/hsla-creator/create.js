import { Color } from "../../../src/color";
import { HslaCreator } from "../../../src/creator/hsla-creator";

describe("HslaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslaCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4));
        expect(result).toEqual("hsla(210,50%,1%,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslaCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("hsla(210,50%,1%,100%)");
    });
});
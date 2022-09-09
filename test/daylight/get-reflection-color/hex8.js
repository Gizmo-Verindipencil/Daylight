import { Daylight } from "../../../src/daylight";

// hex8
// 8桁の16進数表現(例: #00000000 )に関するテスト

describe("Daylight.getReflectionColor - hex8_", () => {
    // hex8_1:
    it("1: 第1引数が16進数(8桁)の色表現の場合は、調整した色の16進数(8桁)表現が返却される", () => {
        // テストの準備
        const expression = "#001122ff";
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            brightness: {
                "11:00:00": "#334455",
                "13:00:00": "#bbddff"
            }
        };

        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression, config);

        // 結果を検証
        expect(result).toBe("#0c1e30ff");
    });

    // hex8_2:
    it("2: 第1引数が16進数(8桁)の色表現を含む場合は、調整した色の16進数(8桁)表現に置換した内容が返却される", () => {
        // テストの準備
        const expression = "linear-gradient(#001122ee, #334455ff);";
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            brightness: {
                "11:00:00": "#667788",
                "13:00:00": "#bbddff"
            }
        };

        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression, config);

        // 結果を検証
        expect(result).toBe("linear-gradient(#0f2032ed, #3c4e60ff);");
    });
});
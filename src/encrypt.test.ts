import { encrypt } from "./encrypt";

describe("encrypt by unicode caesar cipher", () => {
  const cases: [number, string, string][] = [
    [2, "ちちゅうかいせいきこう", "っっょえきうそうくさえ"],
    [1, "アメリカ合衆国の首都は？", "ィモルガ吉衇图は馗郾ば＠"],
    [1, "２０２３年の十二支は？", "３１３４幵は卂亍攰ば＠"],
    [
      1,
      "『高瀬舟』や『舞姫』を書いた小説家は？",
      "』髙瀭舠【ゅ』舟姬【ん曹ぅだ尐読宷ば＠",
    ],
    [
      1,
      "周期表で硫黄の１つ上にある元素は？",
      "呩朠衩と硬黅は２づ下ぬぃれ兄紡ば＠",
    ],
    [1, "徳川綱吉は江戸幕府第何代将軍？", "徴州網吊ば池戹幖庝笭佖令將軎＠"],
  ];

  test.each(cases)("shift %d: %s => %s", (shiftNum, question, encrypted) => {
    expect(encrypt(shiftNum, question)).toBe(encrypted);
  });
});

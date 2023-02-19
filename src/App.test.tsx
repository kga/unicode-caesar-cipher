import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders default question", () => {
  render(<App />);

  const shift = screen.getByDisplayValue<HTMLInputElement>(1);
  const question =
    screen.getByDisplayValue<HTMLInputElement>(
      "徳川綱吉は江戸幕府第何代将軍？"
    );
  const encrypted =
    screen.getByDisplayValue<HTMLInputElement>(
      "徴州網吊ば池戹幖庝笭佖令將軎＠"
    );

  fireEvent.change(question, {
    target: { value: "『高瀬舟』や『舞姫』を書いた小説家は？" },
  });
  expect(encrypted.value).toBe("』髙瀭舠【ゅ』舟姬【ん曹ぅだ尐読宷ば＠");

  fireEvent.change(shift, {
    target: { value: "2" },
  });
  fireEvent.change(question, {
    target: { value: "ちちゅうかいせいきこう" },
  });
  expect(encrypted.value).toBe("っっょえきうそうくさえ");
});

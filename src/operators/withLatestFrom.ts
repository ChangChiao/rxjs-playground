import { of, interval, withLatestFrom } from "rxjs";

const source$ = interval(1000); // 主要的 Observable，每秒發出一個數字
const other$ = of("A", "B", "C", "D"); // 其他的 Observable，包含一系列字母

source$.pipe(withLatestFrom(other$)).subscribe(([sourceValue, otherValue]) => {
  console.log(`Source value: ${sourceValue}, Other value: ${otherValue}`);
});

// Source value: 0, Other value: D
// Source value: 1, Other value: D
// Source value: 2, Other value: D

import { fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";

// 從輸入框中取得搜尋關鍵字
const input = document.querySelector("input");
const input$ = fromEvent(input, "input");
const search = (keyword: string) => {};
const result$ = input$.pipe(
  switchMap((event) => {
    const keyword = event.target.value;
    return search(keyword);
  })
);

result$.subscribe((results) => {
  console.log(results);
});

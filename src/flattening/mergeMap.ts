import { of, timer, map } from "rxjs";
import { mergeMap } from "rxjs/operators";

const source1$ = timer(0, 3000);
const getSource2 = (input) =>
  timer(0, 1500).pipe(map((data) => `資料流 ${input}: ${data}`));

source1$.pipe(mergeMap((data) => getSource2(data))).subscribe((result) => {
  console.log(result);
});

import { of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

const source = of(1, 2, 3, 4);
const example = source.pipe(
  concatMap((val) => of(`Delayed by: ${val} second`).pipe(delay(val * 1000)))
);

const subscribe = example.subscribe((val) => console.log(val));

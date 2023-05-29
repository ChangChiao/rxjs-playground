import { interval, of, delay } from "rxjs";
import { exhaustMap } from "rxjs/operators";

const source = interval(1000); // 每秒發出一個數字
const result = source.pipe(
  exhaustMap((value) => {
    // 在這裡返回一個內嵌的Observable
    return of(value * 10).pipe(delay(2000)); // 將每個數字乘以10，延遲2秒後發出
  })
);

result.subscribe(console.log);
//0
//30
//60
//90...

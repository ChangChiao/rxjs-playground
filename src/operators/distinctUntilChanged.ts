import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const source = of(1, 1, 2, 2, 3, 1, 1, 4); // 假設有一個源Observable，發出一系列數字

source.pipe(distinctUntilChanged()).subscribe(console.log);
// 1
// 2
// 3
// 1
// 4

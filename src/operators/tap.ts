import { filter, of, tap, map } from "rxjs";

const fn = () => {
  of(1, 2, 3)
    .pipe(
      filter((num) => num > 1),
      tap((num) => console.log(num)),
      map((num) => num * num)
    )
    .subscribe((val) => console.log(val));
};

export default fn;

import { of, map } from "rxjs";
const fn = () => {
  const $numArr = of(1, 2, 3);
  $numArr.pipe(map((num) => num * 2)).subscribe((val) => console.log(val));
};

export default fn;

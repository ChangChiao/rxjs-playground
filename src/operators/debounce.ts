import { fromEvent, map, debounceTime } from "rxjs";

const fn = () => {
  const slider = document.getElementById("myRange");
  fromEvent(slider!, "input")
    .pipe(
      debounceTime(2000),
      map((e) => (e.target as HTMLInputElement).value)
    )
    .subscribe((value) => {
      console.log(value);
    });
};

export default fn;

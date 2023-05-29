import { Subject, fromEvent } from "rxjs";

const emitBtn = document.querySelector("#emit");
const inputElement = document.querySelector("#value-input");
const subscribeBtn = document.querySelector("#subscribe");

const fn = () => {
  const value$ = new Subject<string>();
  fromEvent(emitBtn!, "click")
    .pipe(map(() => inputElement.value))
    .subscribe(() => {
      (val) => value$.next(val);
    });
  fromEvent(subscribeBtn, "click").subscribe(() => {
    () => {
      console.log("new Subscription");
      value$.subscribe((value) => console.log(value));
    };
  });
};

export default fn;

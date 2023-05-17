import { Observable } from "rxjs";

const fn = () => {
  let intervalId: ReturnType<typeof setInterval> = -1;
  const observable$ = new Observable<string>((subscriber) => {
    subscriber.next("hello");
    subscriber.next("world");
    intervalId = setInterval(() => {
      console.log("interval");
      subscriber.next("!");
    }, 1000);
    subscriber.next("!!");
    return () => {
      clearInterval(intervalId);
    };
  });
  const subscripttion = observable$.subscribe((value) => console.log(value));

  setTimeout(() => {
    subscripttion.unsubscribe();
  }, 3000);
};

export default fn;

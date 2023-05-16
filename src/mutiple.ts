import { Observable } from "rxjs";

const fn = () => {
  const observable$ = new Observable<string>((subscriber) => {
    console.log("observable executed");

    subscriber.next("hello");
    subscriber.next("world");
    subscriber.next("!!");
  });

  console.log("subscribe1 start");
  observable$.subscribe((value) => console.log("subscribe1", value));

  setTimeout(() => {
    console.log("subscribe2 start");
    observable$.subscribe((value) => console.log("subscribe2", value));
  }, 1000);
};

export default fn;

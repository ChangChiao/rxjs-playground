import { Observable } from "rxjs";

const fn = () => {
  const observable$ = new Observable<string>((subscriber) => {
    subscriber.next("hello");
    subscriber.next("world");
    subscriber.next("!!");
  });

  //   observable$.subscribe({
  //     next: (value: string) => console.log(value),
  //   });

  const subscripttion = observable$.subscribe((value) => console.log(value));

  setTimeout(() => {
    subscripttion.unsubscribe();
  }, 3000);
};

export default fn;

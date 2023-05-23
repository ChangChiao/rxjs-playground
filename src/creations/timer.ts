import { timer, Observable, interval } from "rxjs";

const fn = () => {
  //timer
  const subscription = timer(2000).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });

  setTimeout(() => {
    subscription.unsubscribe();
  }, 2000);

  const timer$ = new Observable<number>((subscribe) => {
    const timeoutId = setTimeout(() => {
      subscribe.next(1);
      subscribe.complete();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  //interval

  interval(1000).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
};

export default fn;

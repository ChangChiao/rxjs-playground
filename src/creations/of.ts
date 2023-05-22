import { Observable, of } from "rxjs";
const fn = () => {
  of("apple", "banana", "orange").subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });

  //print apple banana orange complete

  //equal
  const ourOf = (...args: string[]): Observable<string> => {
    return new Observable<string>((subscriber) => {
      for (let i = 0; i < args.length; i++) {
        subscriber.next(args[i]);
      }
      subscriber.complete();
    });
  };
};

export default fn;

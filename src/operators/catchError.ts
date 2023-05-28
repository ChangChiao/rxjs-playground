import { EMPTY, Observable, catchError, of } from "rxjs";

const fn = () => {
  const failHttpRequest$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.error("Error Time out");
    }, 3000);
  });
  failHttpRequest$
    .pipe(
      //   catchError((error) => of("FallBack")),
      catchError((error) => EMPTY) //pass complete notification
    )
    .subscribe((value) => console.log(value));
};

export default fn;

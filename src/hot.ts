import { Observable } from "rxjs";

const fn = () => {
  const button = document.getElementById("button");

  const buttonClick$ = new Observable<MouseEvent>((subscriber) => {
    button?.addEventListener("click", (event) => {
      subscriber.next(event);
    });
  });

  buttonClick$.subscribe((event) => {
    console.log("sub1", event.type, event.x, event.y);
  });

  setTimeout(() => {
    buttonClick$.subscribe((event) => {
      console.log("sub2", event.type, event.x, event.y);
    });
  }, 3000);
};

export default fn;

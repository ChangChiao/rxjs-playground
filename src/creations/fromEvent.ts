import { Observable, fromEvent } from "rxjs";
const btn = document.getElementById("button");

const fn = () => {
  const subscription = fromEvent<MouseEvent>(btn!, "click").subscribe((event) =>
    console.log("clicked", event.x, event.y)
  );

  setTimeout(() => {
    console.log("unsubscribe");
    subscription.unsubscribe();
  }, 2000);
};

//DIY
const triggerClick$ = new Observable<MouseEvent>((subscribe) => {
  const clickEvent = (event: MouseEvent) => {
    console.log("clickEvent");
    subscribe.next(event);
  };

  btn!.addEventListener("click", clickEvent);

  return () => {
    btn?.removeEventListener("click", clickEvent);
  };
});

const subscriptionSelf = triggerClick$.subscribe((event) =>
  console.log("clicked", event.x, event.y)
);

setTimeout(() => {
  console.log("unsubscribe");
  subscriptionSelf.unsubscribe();
}, 3000);
export default fn;

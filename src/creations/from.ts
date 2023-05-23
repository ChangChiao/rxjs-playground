import { from } from "rxjs";

const fn = () => {
  from(["apple", "banana", "orange"]).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });

  const somePromise = new Promise((resolve, reject) => {
    // resolve("resolve!!")
    reject("reject!!");
  });

  const observableFromPromise$ = from(somePromise);
  observableFromPromise$.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => console.log("complete"),
  });
};

export default fn;

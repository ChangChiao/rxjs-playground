import { ajax } from "rxjs/ajax";

const fn = () => {
  const ajax$ = ajax<any>("https://random-data-api.com/api/name/random_name");

  ajax$.subscribe((data) => console.log("cold data sub1", data.response));
  ajax$.subscribe((data) => console.log("cold data sub2", data.response));
  ajax$.subscribe((data) => console.log("cold data sub3", data.response));
};

export default fn;

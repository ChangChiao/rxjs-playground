import { EMPTY, catchError, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { concatMap, map } from "rxjs";

const searchInput = document.getElementById("search");
const fetchButton = document.getElementById("fetch");

fromEvent(fetchButton!, "click")
  .pipe(
    map((event) => event.target),
    concatMap((target) =>
      ajax(`https://random-data-api.com/api/${value}/random_${target}`)
    ),
    catchError((err) => EMPTY)
  )
  .subscribe({
    next: (val) => console.log("val", val),
    error: (err) => console.log("err", err),
    complete: () => console.log("complete"),
  });

// if one value have error will ended main Subscription
// use catchError can change error to complete notification

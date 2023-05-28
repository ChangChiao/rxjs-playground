import { forkJoin, map } from "rxjs";
import { ajax } from "rxjs/ajax";

const fn = () => {
  const randomName$ = ajax<any>(
    "https://random-data-api.com/api/name/random_name"
  ).pipe(map(res) => res.response.first_name);

  const randomNation$ = ajax<any>(
    "https://random-data-api.com/api/nation/random_nation"
  ).pipe(map(res) => res.response.capital);

  randomName$.subscribe((val) => console.log(val));

  randomNation$.subscribe((val) => console.log(val));

  forkJoin([randomName$, randomNation$]).subscribe(([name, capital]) => {
    console.log(name, capital);
  });
};

export default fn;

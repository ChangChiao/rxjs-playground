import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

const fn = () => {
  const randomName$ = ajax<any>(
    "https://random-data-api.com/api/name/random_name"
  );

  const randomNation$ = ajax<any>(
    "https://random-data-api.com/api/nation/random_nation"
  );

  randomName$.subscribe((res) => console.log(res.response.first_name));

  randomNation$.subscribe((res) => console.log(res.response.capital));

  forkJoin([randomName$, randomNation$]).subscribe((res) => {
    console.log(res);
  });
};

export default fn;

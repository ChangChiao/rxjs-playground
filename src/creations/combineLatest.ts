import { combineLatest, fromEvent } from "rxjs";

const fn = () => {
  const input = document.getElementById("temperature") as HTMLInputElement;
  const dropdown = document.getElementById("dropdown") as HTMLSelectElement;
  const resultDiv = document.getElementById("result") as HTMLDivElement;

  const temperatureInputEvent$ = fromEvent(input, "input");
  const dropdownEvent$ = fromEvent(dropdown, "change");

  combineLatest([temperatureInputEvent$, dropdownEvent$]).subscribe(
    ([inputEvent, dropdownEvent]) => {
      const inputVal = inputEvent.target!.value;
      const dropdownVal = dropdownEvent.target!.value;
      console.log(inputVal);
      console.log(dropdownVal);
      let result: number = 0;
      if (dropdownVal === "c-to-f") {
        result = inputVal * (9 / 5) + 32;
      } else {
        result = (inputVal - 32) * (5 / 9);
      }
      resultDiv.innerText = result.toString();
    }
  );
};

export default fn;

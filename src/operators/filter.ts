import { filter, Observable, Subscription } from "rxjs";

interface NewsItem {
  category: "business" | "sports" | "technology" | "entertainment" | "general";
  constent: string;
}

const fn = () => {
  const newFeed$ = new Observable<NewsItem>((subscriber) => {
    setTimeout(() => {
      subscriber.next({ category: "business", constent: "news 1" });
    }, 1000);
    setTimeout(() => {
      subscriber.next({ category: "sports", constent: "news 2" });
    }, 2000);

    setTimeout(() => {
      subscriber.next({ category: "technology", constent: "news 3" });
    }, 3000);

    setTimeout(() => {
      subscriber.next({ category: "sports", constent: "news 4" });
    }, 4000);
  });
  newFeed$
    .pipe(filter((item) => item.category === "sports"))
    .subscribe((item) => console.log(item));
};

export default fn;

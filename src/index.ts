import { Observable } from "rxjs/Rx";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/let";
import "rxjs/add/observable/range";

/**
 *  Observable of
 */
console.log("#Observable of");
const subscriptionOf = Observable.of("hello world").subscribe(x => {
  console.log(x);
});
subscriptionOf.unsubscribe();

/**
 *  Observable map filter
 */
console.log("#Observable map filter");
const subscriptionMapFilter = Observable.of(1, 2, 3, 4, 5, 6)
  .map(x => x)
  .filter(x => x > 2)
  .subscribe(x => console.log(x));
subscriptionMapFilter.unsubscribe();

/**
 * LET
 */
console.log("#LET");
const obs = Observable.range(1, 3);
const sourceLet = obs.let(o => o.concat(o));
const subscriptionLet = sourceLet.subscribe(
  x => console.log("Next: %s", x),
  err => console.log("Error: %s", err),
  () => console.log("Completed")
);
subscriptionLet.unsubscribe();

/**
 * SCAN: Without a seed
 */
console.log("#SCAN: Without a seed");
const sourceScan = Observable.range(1, 3).scan((acc, x, sourceScan) => acc + x);

const subscriptionScan = sourceScan.subscribe(
  x => console.log("Next: %s", x),
  err => console.log("Error: %s", err),
  () => console.log("Completed")
);
subscriptionScan.unsubscribe();

/**
 * SCAN: With a seed
 */
console.log("#SCAN: With a seed");
const sourceScanWithASeed = Observable.range(1, 3).scan(
  (acc, x, sourceScanWithASeed) => acc + x,
  1
);

const subscriptionScanWithASeed = sourceScanWithASeed.subscribe(
  x => console.log("Next: %s", x),
  err => console.log("Error: %s", err),
  () => console.log("Completed")
);
subscriptionScanWithASeed.unsubscribe();

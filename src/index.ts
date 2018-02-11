import { Observable } from "rxjs/Rx";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/let";
import "rxjs/add/observable/range";

/**
 *  Observable
 */
Observable.of("hello world").subscribe(x => {
  console.log(x);
});

/**
 *  Observable map filter
 */
Observable.of(1, 2, 3, 4, 5, 6)
  .map(x => x)
  .filter(x => x > 2)
  .subscribe(x => console.log(x));

/**
 * LET
 */
const obs = Observable.range(1, 3);
const sourceLet = obs.let(o => o.concat(o));
const subscriptionLet = sourceLet.subscribe(
  x => console.log("Next: %s", x),
  err => console.log("Error: %s", err),
  () => console.log("Completed")
);

/**
 * SCAN: Without a seed
 */
const sourceScan = Observable.range(1, 3).scan((acc, x, sourceScan) => acc + x);

const subscriptionScan = sourceScan.subscribe(
  x => console.log("Next: %s", x),
  err => console.log("Error: %s", err),
  () => console.log("Completed")
);

/**
 * SCAN: With a seed
 */
const sourceScanWithoutASeed = Observable.range(1, 3).scan(
  (acc, x, sourceScanWithoutASeed) => acc + x,
  1
);

const subscriptionScanWithoutASeed = sourceScan.subscribe(
  x => console.log("Next: %s", x),
  err => console.log("Error: %s", err),
  () => console.log("Completed")
);

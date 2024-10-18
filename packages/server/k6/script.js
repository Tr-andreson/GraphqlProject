import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '20s',
  // stages: [
  //   { duration: '2m', target: 2000 }, // fast ramp-up to a high point
  //   // No plateau
  //   { duration: '1m', target: 0 }, // quick ramp-down to 0 users
  // ],
};

const url = "http://localhost:9000/check"
// const url2 = "http://localhost:8000/check"

export default function () {
  http.get(url);
  sleep(1);

}

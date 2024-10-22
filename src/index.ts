#!/usr/bin/env node


export let requestLog: unknown[] = []

export const resetLog = () => { return requestLog = [] }
export const log_request = (req: string) => {
  return requestLog.push({
    timeInSeconds: Date.now() / 1000,
    log: req
  })
};

export const get_count = (seconds: int) => {
  let totalRequests = 0;
  const secondsAgo = (Date.now() / 1000) - seconds;

  for (let i = requestLog.length - 1; i >= 0; i--) {
    //console.log(i)
    const request = requestLog[i];
    //console.log(request, secondsAgo)
    if (request!.timeInSeconds >= secondsAgo) {
      totalRequests++;
    } else {
      // Beyond the range we care about, let's exit.
      return totalRequests;
    }
  }

  return totalRequests;
}
//requestLog.push({ timeInSeconds: (Date.now() * 1000) - 90, log: 'req' })
//log_request('request')

//console.log(log_request('req'))

//console.log('Count', get_count(5))

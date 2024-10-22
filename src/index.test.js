import { describe, expect, it } from "@jest/globals";
import { log_request, get_count, requestLog, resetLog } from './index.ts';
import { request } from "http";
import { beforeEach } from "node:test";
describe("", () => {
	beforeEach(() => {
		//console.log(requestLog)
		resetLog();

	})
	//it("can log a request", () => {
	//	expect(log_request('request')).not.toThrow();
	//});

	it("return count of requests", () => {
		log_request('request');
		log_request('another');
		expect(get_count(5)).toBe(2);
	});

	it("does not return requests outside the timeframe", () => {
		resetLog();
		requestLog.lengh = 0
		requestLog.push({ timeInSeconds: (Date.now() / 1000) - 90, log: 'req' });

		log_request('req');


		console.log(requestLog);

		expect(get_count(5)).toBe(1)
		expect(get_count(91)).toBe(2)
	});
});

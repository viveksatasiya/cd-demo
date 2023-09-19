import { When, Then } from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';

let response: AxiosResponse | null = null;

When('I make a GET request to {string}', async (route: string) => {
  response = await axios.get(`http://localhost:3000${route}`);
});

Then('I should receive a {int} OK response', (statusCode: number) => {
  if (response === null) {
    throw new Error('No response received');
  }
  expect(response.status).to.equal(statusCode);
});

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-rpavy-код-брони-l');
  this.route('i-i-s-rpavy-код-брони-e',
  { path: 'i-i-s-rpavy-код-брони-e/:id' });
  this.route('i-i-s-rpavy-код-брони-e.new',
  { path: 'i-i-s-rpavy-код-брони-e/new' });
  this.route('i-i-s-rpavy-место-на-рейс-l');
  this.route('i-i-s-rpavy-место-на-рейс-e',
  { path: 'i-i-s-rpavy-место-на-рейс-e/:id' });
  this.route('i-i-s-rpavy-место-на-рейс-e.new',
  { path: 'i-i-s-rpavy-место-на-рейс-e/new' });
  this.route('i-i-s-rpavy-оператор-l');
  this.route('i-i-s-rpavy-оператор-e',
  { path: 'i-i-s-rpavy-оператор-e/:id' });
  this.route('i-i-s-rpavy-оператор-e.new',
  { path: 'i-i-s-rpavy-оператор-e/new' });
  this.route('i-i-s-rpavy-пассажир-l');
  this.route('i-i-s-rpavy-пассажир-e',
  { path: 'i-i-s-rpavy-пассажир-e/:id' });
  this.route('i-i-s-rpavy-пассажир-e.new',
  { path: 'i-i-s-rpavy-пассажир-e/new' });
  this.route('i-i-s-rpavy-посад-талон-l');
  this.route('i-i-s-rpavy-посад-талон-e',
  { path: 'i-i-s-rpavy-посад-талон-e/:id' });
  this.route('i-i-s-rpavy-посад-талон-e.new',
  { path: 'i-i-s-rpavy-посад-талон-e/new' });
  this.route('i-i-s-rpavy-проверка-l');
  this.route('i-i-s-rpavy-проверка-e',
  { path: 'i-i-s-rpavy-проверка-e/:id' });
  this.route('i-i-s-rpavy-проверка-e.new',
  { path: 'i-i-s-rpavy-проверка-e/new' });
  this.route('i-i-s-rpavy-рейс-l');
  this.route('i-i-s-rpavy-рейс-e',
  { path: 'i-i-s-rpavy-рейс-e/:id' });
  this.route('i-i-s-rpavy-рейс-e.new',
  { path: 'i-i-s-rpavy-рейс-e/new' });
  this.route('i-i-s-rpavy-терминал-l');
  this.route('i-i-s-rpavy-терминал-e',
  { path: 'i-i-s-rpavy-терминал-e/:id' });
  this.route('i-i-s-rpavy-терминал-e.new',
  { path: 'i-i-s-rpavy-терминал-e/new' });
});

export default Router;

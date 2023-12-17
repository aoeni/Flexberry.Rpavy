import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rpavy-терминал', 'Unit | Model | i-i-s-rpavy-терминал', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-rpavy-инф-бронь',
    'model:i-i-s-rpavy-код-брони',
    'model:i-i-s-rpavy-место-на-рейс',
    'model:i-i-s-rpavy-оператор',
    'model:i-i-s-rpavy-пассажир',
    'model:i-i-s-rpavy-посад-талон',
    'model:i-i-s-rpavy-проверка',
    'model:i-i-s-rpavy-рейс',
    'model:i-i-s-rpavy-терминал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

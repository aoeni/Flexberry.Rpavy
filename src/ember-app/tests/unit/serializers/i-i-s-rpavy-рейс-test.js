import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rpavy-рейс', 'Unit | Serializer | i-i-s-rpavy-рейс', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-rpavy-рейс',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-rpavy-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

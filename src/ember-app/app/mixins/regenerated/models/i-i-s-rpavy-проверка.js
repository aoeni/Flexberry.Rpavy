import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  заменаЛенты: DS.attr('string'),
  оператор: DS.belongsTo('i-i-s-rpavy-оператор', { inverse: null, async: false }),
  терминал: DS.belongsTo('i-i-s-rpavy-терминал', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-rpavy-проверка.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-rpavy-проверка.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заменаЛенты: {
    descriptionKey: 'models.i-i-s-rpavy-проверка.validations.заменаЛенты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-rpavy-проверка.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-rpavy-проверка.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаE', 'i-i-s-rpavy-проверка', {
    время: attr('Время', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    заменаЛенты: attr('Замена ленты', { index: 2 }),
    оператор: belongsTo('i-i-s-rpavy-оператор', 'Оператор', {
      фИО: attr('ФИО', { index: 4, hidden: true }),
      iD: attr('ID', { index: 7 }),
      кодВхода: attr('Код входа', { index: 8 })
    }, { index: 3, displayMemberPath: 'фИО' }),
    терминал: belongsTo('i-i-s-rpavy-терминал', 'Терминал', {
      номер: attr('Номер', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('ПроверкаL', 'i-i-s-rpavy-проверка', {
    время: attr('Время', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    заменаЛенты: attr('Замена ленты', { index: 2 }),
    оператор: belongsTo('i-i-s-rpavy-оператор', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    терминал: belongsTo('i-i-s-rpavy-терминал', 'Номер', {
      номер: attr('Номер', { index: 4 })
    }, { index: -1, hidden: true })
  });
};

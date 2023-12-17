import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  кодВхода: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-rpavy-оператор.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодВхода: {
    descriptionKey: 'models.i-i-s-rpavy-оператор.validations.кодВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-rpavy-оператор.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОператорE', 'i-i-s-rpavy-оператор', {
    фИО: attr('ФИО', { index: 0 }),
    кодВхода: attr('Код входа', { index: 1 }),
    iD: attr('ID', { index: 2 })
  });

  modelClass.defineProjection('ОператорL', 'i-i-s-rpavy-оператор', {
    фИО: attr('ФИО', { index: 0 }),
    кодВхода: attr('Код входа', { index: 1 }),
    iD: attr('ID', { index: 2 })
  });
};

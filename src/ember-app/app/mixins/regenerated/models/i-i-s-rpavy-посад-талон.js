import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВыд: DS.attr('date', { defaultValue() { return new Date(); } }),
  пассажир: DS.belongsTo('i-i-s-rpavy-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-rpavy-рейс', { inverse: null, async: false })
});

export let ValidationRules = {
  датаВыд: {
    descriptionKey: 'models.i-i-s-rpavy-посад-талон.validations.датаВыд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  пассажир: {
    descriptionKey: 'models.i-i-s-rpavy-посад-талон.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-rpavy-посад-талон.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосадТалонE', 'i-i-s-rpavy-посад-талон', {
    датаВыд: attr('Дата выдачи', { index: 0 })
  });

  modelClass.defineProjection('ПосадТалонL', 'i-i-s-rpavy-посад-талон', {
    датаВыд: attr('Дата выдачи', { index: 0 })
  });
};

import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISRpavyКодБрониLForm from './forms/i-i-s-rpavy-код-брони-l';
import IISRpavyМестоНаРейсLForm from './forms/i-i-s-rpavy-место-на-рейс-l';
import IISRpavyОператорLForm from './forms/i-i-s-rpavy-оператор-l';
import IISRpavyПассажирLForm from './forms/i-i-s-rpavy-пассажир-l';
import IISRpavyПосадТалонLForm from './forms/i-i-s-rpavy-посад-талон-l';
import IISRpavyПроверкаLForm from './forms/i-i-s-rpavy-проверка-l';
import IISRpavyРейсLForm from './forms/i-i-s-rpavy-рейс-l';
import IISRpavyТерминалLForm from './forms/i-i-s-rpavy-терминал-l';
import IISRpavyКодБрониEForm from './forms/i-i-s-rpavy-код-брони-e';
import IISRpavyМестоНаРейсEForm from './forms/i-i-s-rpavy-место-на-рейс-e';
import IISRpavyОператорEForm from './forms/i-i-s-rpavy-оператор-e';
import IISRpavyПассажирEForm from './forms/i-i-s-rpavy-пассажир-e';
import IISRpavyПосадТалонEForm from './forms/i-i-s-rpavy-посад-талон-e';
import IISRpavyПроверкаEForm from './forms/i-i-s-rpavy-проверка-e';
import IISRpavyРейсEForm from './forms/i-i-s-rpavy-рейс-e';
import IISRpavyТерминалEForm from './forms/i-i-s-rpavy-терминал-e';
import IISRpavyИнфБроньModel from './models/i-i-s-rpavy-инф-бронь';
import IISRpavyКодБрониModel from './models/i-i-s-rpavy-код-брони';
import IISRpavyМестоНаРейсModel from './models/i-i-s-rpavy-место-на-рейс';
import IISRpavyОператорModel from './models/i-i-s-rpavy-оператор';
import IISRpavyПассажирModel from './models/i-i-s-rpavy-пассажир';
import IISRpavyПосадТалонModel from './models/i-i-s-rpavy-посад-талон';
import IISRpavyПроверкаModel from './models/i-i-s-rpavy-проверка';
import IISRpavyРейсModel from './models/i-i-s-rpavy-рейс';
import IISRpavyТерминалModel from './models/i-i-s-rpavy-терминал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-rpavy-инф-бронь': IISRpavyИнфБроньModel,
    'i-i-s-rpavy-код-брони': IISRpavyКодБрониModel,
    'i-i-s-rpavy-место-на-рейс': IISRpavyМестоНаРейсModel,
    'i-i-s-rpavy-оператор': IISRpavyОператорModel,
    'i-i-s-rpavy-пассажир': IISRpavyПассажирModel,
    'i-i-s-rpavy-посад-талон': IISRpavyПосадТалонModel,
    'i-i-s-rpavy-проверка': IISRpavyПроверкаModel,
    'i-i-s-rpavy-рейс': IISRpavyРейсModel,
    'i-i-s-rpavy-терминал': IISRpavyТерминалModel
  },

  'application-name': 'Rpavy',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Rpavy',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Rpavy',
          title: 'Rpavy'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        rpavy: {
          caption: 'Rpavy',
          title: 'Rpavy',
          'i-i-s-rpavy-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-rpavy-код-брони-l': {
            caption: 'Код брони',
            title: ''
          },
          'i-i-s-rpavy-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          },
          'i-i-s-rpavy-проверка-l': {
            caption: 'Проверка',
            title: ''
          },
          'i-i-s-rpavy-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-rpavy-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-rpavy-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-rpavy-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-rpavy-код-брони-l': IISRpavyКодБрониLForm,
    'i-i-s-rpavy-место-на-рейс-l': IISRpavyМестоНаРейсLForm,
    'i-i-s-rpavy-оператор-l': IISRpavyОператорLForm,
    'i-i-s-rpavy-пассажир-l': IISRpavyПассажирLForm,
    'i-i-s-rpavy-посад-талон-l': IISRpavyПосадТалонLForm,
    'i-i-s-rpavy-проверка-l': IISRpavyПроверкаLForm,
    'i-i-s-rpavy-рейс-l': IISRpavyРейсLForm,
    'i-i-s-rpavy-терминал-l': IISRpavyТерминалLForm,
    'i-i-s-rpavy-код-брони-e': IISRpavyКодБрониEForm,
    'i-i-s-rpavy-место-на-рейс-e': IISRpavyМестоНаРейсEForm,
    'i-i-s-rpavy-оператор-e': IISRpavyОператорEForm,
    'i-i-s-rpavy-пассажир-e': IISRpavyПассажирEForm,
    'i-i-s-rpavy-посад-талон-e': IISRpavyПосадТалонEForm,
    'i-i-s-rpavy-проверка-e': IISRpavyПроверкаEForm,
    'i-i-s-rpavy-рейс-e': IISRpavyРейсEForm,
    'i-i-s-rpavy-терминал-e': IISRpavyТерминалEForm
  },

});

export default translations;

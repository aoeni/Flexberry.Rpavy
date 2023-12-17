import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.rpavy.caption'),
          title: i18n.t('forms.application.sitemap.rpavy.title'),
          children: [{
            link: 'i-i-s-rpavy-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-место-на-рейс-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-rpavy-код-брони-l',
            caption: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-код-брони-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-rpavy-пассажир-l',
            caption: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-пассажир-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-rpavy-проверка-l',
            caption: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-проверка-l.caption'),
            title: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-проверка-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-rpavy-оператор-l',
            caption: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-оператор-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-rpavy-терминал-l',
            caption: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-терминал-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-rpavy-рейс-l',
            caption: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-рейс-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-rpavy-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.rpavy.i-i-s-rpavy-посад-талон-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})
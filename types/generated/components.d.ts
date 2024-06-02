import type { Schema, Attribute } from '@strapi/strapi';

export interface OpenCloseTimesOpenCloseTimes extends Schema.Component {
  collectionName: 'components_open_close_times_open_close_times';
  info: {
    displayName: 'Open_Close_Times';
    description: '';
  };
  attributes: {
    open_time: Attribute.String;
    close_time: Attribute.String;
    interval_name: Attribute.String;
  };
}

export interface OpeningHoursOpeningHours extends Schema.Component {
  collectionName: 'components_opening_hours_opening_hours';
  info: {
    displayName: 'opening_hours';
    description: '';
  };
  attributes: {
    day_interval: Attribute.String;
    Times: Attribute.Component<'open-close-times.open-close-times', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'open-close-times.open-close-times': OpenCloseTimesOpenCloseTimes;
      'opening-hours.opening-hours': OpeningHoursOpeningHours;
    }
  }
}

import {LocalDate, LocalTime} from "@js-joda/core";

export enum CustomFilterWeekday {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
  ENTIRE_WEEK,
}

export type VariantChannelWrapper = {
  variantDomainId: string;
  channelId: number;
}

export type TimeRange = {
  start: LocalTime | undefined;
  end: LocalTime | undefined;
}

export type DateRange = {
  start: LocalDate | undefined;
  end: LocalDate | undefined;
}

export type FilterCriteria = {
  timeRange: TimeRange;
  dateRange: DateRange;
  variants: VariantChannelWrapper[];
  customFilterWeekday: CustomFilterWeekday;
}

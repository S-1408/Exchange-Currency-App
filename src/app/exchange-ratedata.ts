export interface ExchangeRatedata {

  base_code: string;
  conversion_rates: {
    [key: string]: number;
  };
  time_next_update_utc: string;
}

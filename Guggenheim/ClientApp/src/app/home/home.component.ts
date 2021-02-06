import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  readonly ENTRY = 3.00;
  readonly PER_UNIT = .35;
  readonly NY_TAX_SURCHARGE = .50;
  readonly PEAK_HOUR_START = '16:00';
  readonly PEAK_HOUR_END = '20:00';
  readonly PEAK_HOUR_SURCHAGE = 1.00;
  readonly NIGHT_HOUR_START = '20:00';
  readonly NIGHT_HOUR_END = '30:00'; //Have to do it this way to account for rotation in day.
  readonly NIGHT_HOUR_SURCHARGE = .5;

  private minutes_above_6;
  private miles_below_6;
  private date;
  private start_time;
  public total_fare;

  //Could use getters and setters, but want to keep this code as readible as possible.
  changeValue(key,value) {
    if (key == 'minutes_above_6')
      this.minutes_above_6 = value;
    else if (key == 'miles_below_6')
      this.miles_below_6 = value;
    else if (key == 'date')
      this.date = value;
    else if (key == 'start_time')
      this.start_time = value;
    this.calculateFare();
  }

  calculateFare() {
    this.total_fare = this.ENTRY + this.NY_TAX_SURCHARGE + this.milesToCost() + this.minutesToCost() + this.getPeakHourSurcharge() + this.getNightSurcharge();
  }

  milesToCost() {
    return this.miles_below_6 * 5 * this.PER_UNIT;
  }

  minutesToCost() {
    return this.minutes_above_6 * this.PER_UNIT;
  }

  getPeakHourSurcharge() {
    if (this.PEAK_HOUR_START <= this.start_time && this.start_time < this.PEAK_HOUR_END) {
      var day = formatDate(this.date, 'EEEE', 'en-US');
      if (!(day === 'Saturday' || day === 'Sunday'))
        return this.PEAK_HOUR_SURCHAGE;
    }
    return 0;
  }

  getNightSurcharge() {
    if (this.NIGHT_HOUR_START <= this.start_time && this.start_time < this.NIGHT_HOUR_END)
      return this.NIGHT_HOUR_SURCHARGE;
    return 0;
  }
}

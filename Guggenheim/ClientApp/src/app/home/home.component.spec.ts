import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Counter');
  }));

  it('should output $9.75', async(() => {
    const hostElement = fixture.nativeElement;
    var minutes_above_6 = hostElement.querySelector('#minutes_above_6');
    var miles_below_6 = hostElement.querySelector('#miles_below_6');
    var date = hostElement.querySelector('#date');
    var start_time = hostElement.querySelector('#start_time');

    minutes_above_6.value = 2;
    miles_below_6.value = 5;
    date.value = '10/08/2010';
    start_time.value = '17:30';

    fixture.detectChanges();

    expect(hostElement.querySelector('p strong').textContent).toBe('$78');

  }));
});

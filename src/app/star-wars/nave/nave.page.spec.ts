import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavePage } from './nave.page';

describe('NavePage', () => {
  let component: NavePage;
  let fixture: ComponentFixture<NavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

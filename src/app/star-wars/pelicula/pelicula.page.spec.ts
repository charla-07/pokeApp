import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeliculaPage } from './pelicula.page';

describe('PeliculaPage', () => {
  let component: PeliculaPage;
  let fixture: ComponentFixture<PeliculaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

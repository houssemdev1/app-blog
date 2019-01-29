import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoarticleComponent } from './infoarticle.component';

describe('InfoarticleComponent', () => {
  let component: InfoarticleComponent;
  let fixture: ComponentFixture<InfoarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

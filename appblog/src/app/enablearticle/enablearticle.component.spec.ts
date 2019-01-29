import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnablearticleComponent } from './enablearticle.component';

describe('EnablearticleComponent', () => {
  let component: EnablearticleComponent;
  let fixture: ComponentFixture<EnablearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnablearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnablearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

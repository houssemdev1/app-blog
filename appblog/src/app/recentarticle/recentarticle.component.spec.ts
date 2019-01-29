import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentarticleComponent } from './recentarticle.component';

describe('RecentarticleComponent', () => {
  let component: RecentarticleComponent;
  let fixture: ComponentFixture<RecentarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchgroupDetailComponent } from './researchgroup-detail.component';

describe('ResearchgroupDetailComponent', () => {
  let component: ResearchgroupDetailComponent;
  let fixture: ComponentFixture<ResearchgroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchgroupDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchgroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

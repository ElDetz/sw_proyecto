import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchgroupListComponent } from './researchgroup-list.component';

describe('ResearchgroupListComponent', () => {
  let component: ResearchgroupListComponent;
  let fixture: ComponentFixture<ResearchgroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchgroupListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchgroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

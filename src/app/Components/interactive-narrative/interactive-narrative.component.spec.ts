import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveNarrativeComponent } from './interactive-narrative.component';

describe('InteractiveNarrativeComponent', () => {
  let component: InteractiveNarrativeComponent;
  let fixture: ComponentFixture<InteractiveNarrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveNarrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveNarrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

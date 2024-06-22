import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationRulesComponent } from './automation-rules.component';

describe('AutomationRulesComponent', () => {
  let component: AutomationRulesComponent;
  let fixture: ComponentFixture<AutomationRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomationRulesComponent]
    });
    fixture = TestBed.createComponent(AutomationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

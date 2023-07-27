import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySectionComponent } from './category-section.component';

describe('CategorySectionComponent', () => {
  let component: CategorySectionComponent;
  let fixture: ComponentFixture<CategorySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorySectionComponent]
    });
    fixture = TestBed.createComponent(CategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

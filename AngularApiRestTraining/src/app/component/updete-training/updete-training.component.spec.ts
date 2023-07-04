import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdeteTrainingComponent } from './updete-training.component';

describe('UpdeteTrainingComponent', () => {
  let component: UpdeteTrainingComponent;
  let fixture: ComponentFixture<UpdeteTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdeteTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdeteTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

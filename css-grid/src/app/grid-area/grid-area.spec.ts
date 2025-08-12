import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridArea } from './grid-area';

describe('GridArea', () => {
  let component: GridArea;
  let fixture: ComponentFixture<GridArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

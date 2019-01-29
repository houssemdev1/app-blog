import { TestBed, async, inject } from '@angular/core/testing';

import { ProfilRoleGuard } from './profil-role.guard';

describe('ProfilRoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilRoleGuard]
    });
  });

  it('should ...', inject([ProfilRoleGuard], (guard: ProfilRoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});

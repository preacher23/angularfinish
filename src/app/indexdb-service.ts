import Dexie from 'dexie';

export interface Profile {
  id: number;
  name: string;
  description: string;
  image: string;
}

export class IndexedDBService extends Dexie {
  profiles!: Dexie.Table<Profile, number>;

  constructor() {
    super('ProfilesDatabase');
    this.version(1).stores({
      profiles: '++id, name, description, image'
    });
  }

  addProfile(profile: Profile) {
    return this.profiles.add(profile);
  }

  getProfiles() {
    return this.profiles.toArray();
  }

  removeProfile(profileId: number) {
    return this.profiles.delete(profileId);
  }
}

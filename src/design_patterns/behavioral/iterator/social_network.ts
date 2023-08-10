export interface Profile {
  getEmails(): string[];
  getId(): string;
  getName(): string;
}

export class Profile implements Profile {
  emails: string[];
  name: string;
  constructor(name: string) {
    this.name = name;
    this.emails = [];
  }
  getName(): string {
    return this.name;
  }
  getEmails(): string[] {
    return this.emails;
  }
}

export interface ProfileIterator {
  getNext(): Profile;
  hasMore(): boolean;
}

export class FacebookIterator implements ProfileIterator {
  facebook: Facebook;
  profileId: string;
  type: string;
  currentPosition: number;
  cache: Profile[];
  constructor(facebook: Facebook, profileId: string, type: string) {
    this.facebook = facebook;
    this.profileId = profileId;
    this.type = type;
  }
  getNext(): Profile {
    throw new Error("Method not implemented.");
  }
  hasMore(): boolean {
    throw new Error("Method not implemented.");
  }
}

export interface SocialNetwork {
  createFriendsIterator(profileId: string): ProfileIterator;
  createCoworkersIterator(profileId: string): ProfileIterator;
}

export class Facebook implements SocialNetwork {
  socialGraphRequest(profileId: string, type: string): Profile[] {
    throw new Error("Method not implemented.");
  }
  createFriendsIterator(profileId: string): ProfileIterator {
    throw new Error("Method not implemented.");
  }
  createCoworkersIterator(profileId: string): ProfileIterator {
    throw new Error("Method not implemented.");
  }
}

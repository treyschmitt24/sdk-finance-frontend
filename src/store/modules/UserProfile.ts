import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import { UserInfoRequests } from '@/services/requests';
import { IUserProfile } from '@/types/interfaces';
import { Store } from 'vuex';

@Module({ namespaced: true, name: 'UserProfile', store: {} as Store<any> })
export class UserProfile extends VuexModule {

  public userProfileData: IUserProfile = {};

  public get identificationStatus(): string {
    return this.userProfileData?.status || '';
  }

  public get role(): string {
    return this.userProfileData?.role?.[0]?.code || '';
  }

  @Mutation
  public SET_USER_PROFILE(profile: IUserProfile): void {
    this.userProfileData = profile;
  }

  @Action({ rawError: true })
  public async getProfile(id: string): Promise<any> {
    const { response, error } = await UserInfoRequests.getUserProfile(id);
    const { profile } = response || {};

    this.context.commit('SET_USER_PROFILE', profile);

    return { response, error };
  }

}

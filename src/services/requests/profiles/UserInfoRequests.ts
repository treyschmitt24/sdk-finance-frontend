import api from '@/services/api';
import {
  IUserInfo,
  IUserAddress,
  IUserBusiness,
  IUserSecurity,
  IGetUserInfoApiResponse,
} from '@/services/requests/profiles/UserProfile.types';
import { IApiResponse } from '@/types/interfaces';

export const UserInfoRequests = {

  getUserProfile(userId: string): Promise<IGetUserInfoApiResponse> {
    return api.get(`/profiles/${userId}`);
  },

  updateUserProfileInfo(userId: string, person: IUserInfo): Promise<IApiResponse<any>> {
    return api.patch(`/profiles/${userId}/person`, { person });
  },

  updateUserAddress(userId: string, address: IUserAddress): Promise<IApiResponse<any>> {
    return api.patch(`/profiles/${userId}/address`, { address });
  },

  updateUserBusiness(userId: string, data: IUserBusiness): Promise<IApiResponse<any>> {
    return api.patch(`/profiles/${userId}/business`, data);
  },

  updateUserLogin(userId: string, login: string): Promise<IApiResponse<any>> {
    return api.patch(`/profiles/${userId}/contact`, { login });
  },

  updateUserSecurity(userId: string, security: IUserSecurity): Promise<IApiResponse<any>> {
    return api.patch(`/profiles/${userId}/security-settings`, { security });
  },

};

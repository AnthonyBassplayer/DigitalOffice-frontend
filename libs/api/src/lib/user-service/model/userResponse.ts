/**
 * UserService
 * UserService is an API intended to work with the users, user profile, achivments  **Changes since 0.0.0** - 
 *
 * OpenAPI spec version: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AchievementResponse } from './achievementResponse';

export interface UserResponse { 
    /**
     * User global unique identifier.
     */
    id?: string;
    /**
     * First name of a user.
     */
    firstName?: string;
    /**
     * Last name of a user.
     */
    lastName?: string;
    /**
     * Last name of a user.
     */
    middleName?: string;
    /**
     * User mail.
     */
    email?: string;
    /**
     * User status.
     */
    status?: string;
    /**
     * Avatar file global unique identifier.
     */
    avatarId?: string;
    /**
     * Certificate files global unique identifiers.
     */
    certificatesIds?: string;
    achievementsIds?: AchievementResponse;
    isAdmin?: boolean;
}
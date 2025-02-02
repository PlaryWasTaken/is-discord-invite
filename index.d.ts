/**
 * @module is-discord-invite
 */

declare module 'is-discord-invite' {
    interface RegexFilters {
        everything?: boolean;
        defaultDiscordUrls?: boolean;
        otherDiscordUrls?: boolean;
        disboard?: boolean;
        discordMe?: boolean;
        discordhome?: boolean;
    }


    interface DiscordResponse {
        type: number;
        code: string;
        inviter: {
            id: string;
            username: string;
            avatar: string;
            discriminator: string;
            public_flags: number;
            flags: number;
            banner: string | null;
            accent_color: string | null;
            global_name: string;
            avatar_decoration_data: string | null;
            banner_color: string | null;
        };
        expires_at: string;
        flags: number;
        guild: {
            id: string;
            name: string;
            splash: string;
            banner: string;
            description: string;
            icon: string;
            features: string[];
            verification_level: number;
            vanity_url_code: string | null;
            nsfw_level: number;
            nsfw: boolean;
            premium_subscription_count: number;
        };
        guild_id: string;
        channel: {
            id: string;
            type: number;
            name: string;
        };
    }

    interface SefinekAPIResponse {
        success: boolean;
        code: number;
        isInvitation: boolean;
        message: string;
        url: string;
        invitationCode: string;
        discordResponse: DiscordResponse;
    }


    /**
     * This module checks if a given string is an invitation link to a Discord server.
     *
     * @param {string} text - The input string to be checked.
     * @param {object} options - An options object for customizing the behavior.
     * @returns {boolean} - Returns `true` if the input is a valid Discord server invitation link, `false` otherwise.
     */
    export function regex(text: string, options?: RegexFilters): boolean;

    /**
     * Checks for valid Discord invitation links in a given text and fetches invitation data.
     *
     * @param {string} text - The input text to search for Discord invitation links.
     * @returns {Promise<Object|null>} - Returns invitation data if a valid link is found, or `null` if no valid links are found.
     */
    export function online(text: string): Promise<SefinekAPIResponse>;
}
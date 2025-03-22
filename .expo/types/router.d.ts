/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/create-profile`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/new-login`; params?: Router.UnknownInputParams; } | { pathname: `/onboarding`; params?: Router.UnknownInputParams; } | { pathname: `/signin`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/games` | `/games`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/marketplace` | `/marketplace`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/wallet` | `/wallet`; params?: Router.UnknownInputParams; } | { pathname: `/bug-bounty/ai-chat`; params?: Router.UnknownInputParams; } | { pathname: `/bug-bounty`; params?: Router.UnknownInputParams; } | { pathname: `/bug-bounty/pythonBounty`; params?: Router.UnknownInputParams; } | { pathname: `/bug-bounty/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/course/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/learn/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/quiz/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/create-profile`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/login`; params?: Router.UnknownOutputParams; } | { pathname: `/new-login`; params?: Router.UnknownOutputParams; } | { pathname: `/onboarding`; params?: Router.UnknownOutputParams; } | { pathname: `/signin`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/games` | `/games`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/marketplace` | `/marketplace`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/wallet` | `/wallet`; params?: Router.UnknownOutputParams; } | { pathname: `/bug-bounty/ai-chat`; params?: Router.UnknownOutputParams; } | { pathname: `/bug-bounty`; params?: Router.UnknownOutputParams; } | { pathname: `/bug-bounty/pythonBounty`; params?: Router.UnknownOutputParams; } | { pathname: `/bug-bounty/[id]`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/course/[id]`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/learn/[id]`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/quiz/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/create-profile${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `/new-login${`?${string}` | `#${string}` | ''}` | `/onboarding${`?${string}` | `#${string}` | ''}` | `/signin${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/games${`?${string}` | `#${string}` | ''}` | `/games${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/marketplace${`?${string}` | `#${string}` | ''}` | `/marketplace${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/wallet${`?${string}` | `#${string}` | ''}` | `/wallet${`?${string}` | `#${string}` | ''}` | `/bug-bounty/ai-chat${`?${string}` | `#${string}` | ''}` | `/bug-bounty${`?${string}` | `#${string}` | ''}` | `/bug-bounty/pythonBounty${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/create-profile`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/new-login`; params?: Router.UnknownInputParams; } | { pathname: `/onboarding`; params?: Router.UnknownInputParams; } | { pathname: `/signin`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/games` | `/games`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/marketplace` | `/marketplace`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/wallet` | `/wallet`; params?: Router.UnknownInputParams; } | { pathname: `/bug-bounty/ai-chat`; params?: Router.UnknownInputParams; } | { pathname: `/bug-bounty`; params?: Router.UnknownInputParams; } | { pathname: `/bug-bounty/pythonBounty`; params?: Router.UnknownInputParams; } | `/bug-bounty/${Router.SingleRoutePart<T>}` | `/course/${Router.SingleRoutePart<T>}` | `/learn/${Router.SingleRoutePart<T>}` | `/quiz/${Router.SingleRoutePart<T>}` | { pathname: `/bug-bounty/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/course/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/learn/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/quiz/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}

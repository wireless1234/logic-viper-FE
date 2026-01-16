// utils/sessionKey.ts
export const getSessionKey = (): string => {
  const KEY = "checkout_session_key";

  if (typeof window === "undefined") return "";

  let sessionKey = sessionStorage.getItem(KEY);

  if (!sessionKey) {
    sessionKey = crypto.randomUUID();
    sessionStorage.setItem(KEY, sessionKey);
  }

  return sessionKey;
};

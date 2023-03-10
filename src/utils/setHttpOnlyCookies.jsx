export function setHttpOnlyCookies(access_token, refresh_token) {
  document.cookie = `access_token=${access_token};  SameSite=Strict; path=/;  secure`;
  document.cookie = `refresh_token=${refresh_token};  SameSite=Strict; path=/;  secure`;
}

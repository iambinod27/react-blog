export function setHttpOnlyCookies(access_token, username) {
  document.cookie = `access_token=${access_token};  SameSite=Strict; path=/;  secure`;
  document.cookie = `username=${username};  SameSite=Strict; path=/;  secure`;
}

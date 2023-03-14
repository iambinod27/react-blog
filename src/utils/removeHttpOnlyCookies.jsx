export default function removeHttpOnlyCookies() {
  document.cookie = `access_token=;  SameSite=Strict; path=/;  secure`;
  document.cookie = `username=;  SameSite=Strict; path=/;  secure`;
  document.cookie = `isAuthenticated=;  SameSite=Strict; path=/;  secure`;
}

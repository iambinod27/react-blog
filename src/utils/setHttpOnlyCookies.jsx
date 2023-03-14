export function setHttpOnlyCookies(access_token, username) {
  let now = new Date();
  let time = now.getTime();
  time += 3600 * 1000;
  now.setTime(time);

  document.cookie = `access_token=${access_token};SameSite=Strict; expires=${now.toUTCString()};  path=/;  secure`;
  document.cookie = `username=${username};  SameSite=Strict; path=/;  secure`;
  document.cookie = `isAuthenticated=true;  SameSite=Strict; path=/;  secure`;
}

// Replace CLIENT_SIDE_HOSTED_UI_URL in instructions below or set from environment
const loginBtn = document.getElementById('loginBtn');

// You can either paste the full Cognito Hosted UI URL in index.html
// or construct it here dynamically by filling client_id, domain, region and redirect_uri.
loginBtn.addEventListener('click', () => {
  // Option A: If you already know your Hosted UI URL, set it here:
  // const hostedUrl = 'https://<your-domain>.auth.<region>.amazoncognito.com/login?...';
  // window.location.href = hostedUrl;

  // Option B: If you want the app to build it dynamically (fill values below):
  const domain = 'mytasktracker-login';         // e.g. myapp-domain
  const region = 'us-east-1';             // e.g. us-east-1
  const clientId = '57gvj3onahv2qgi3iml6o8msp4';        // from Cognito App client
  const redirectUri = 'http://my-task-tracker-frontend-phanindra-2025.s3-website.us-east-2.amazonaws.com';  // e.g. https://example-bucket.s3-website.us-east-2.amazonaws.com/
  // Use Authorization Code + PKCE preferred:
  const responseType = 'code';
  const scope = encodeURIComponent('openid profile email');
  const hostedUrl = `https://${domain}.auth.${region}.amazoncognito.com/login?response_type=${responseType}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
  window.location.href = hostedUrl;
});


// Simple local task demo (not authenticated)
const form = document.getElementById('taskForm');
const list = document.getElementById('taskList');
const input = document.getElementById('taskInput');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if(!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
  input.value = '';
});

const rootURL = 'https://api.github.com';


function getToken() {
  return '';
}

function forkRepo() {
  debugger
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}" target="_blank">${json.html_url}`
}

function createIssue() {
  const postIssue = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  const username = ''

  fetch(`${baseURL}/repos/${username}/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify(postIssue),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues())
}

function getIssues() {
  const username = ''
  fetch(`${baseURL}/repos/${username}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
}

function loadGithubOrg(organisation) {

    const apiUrl = 'https://api.github.com/orgs/' + organisation;
    // const apiUrl = 'https://api.github.com/softreck';
    let totalStars = 0;
    const languages = {};

    $('.page-content').append(`<div class="page-content__section ${organisation}">
        <div class="page-content__wrapper">
            <h2 class="page-heading"></h2>
            <div class="languages">
                <h3 class="languages__title">Top languages</h3>
            </div>
        </div>
    </div>

    <div class="page-content__section page-content__section--repos ${organisation}">
        <div class="page-content__wrapper">
            <ol class="repos"></ol>
        </div>
    </div>`);

    $('.' + organisation + ' .page-heading').append(`<span>${organisation}</span>`);

    $.ajax(`${apiUrl}/repos?per_page=1000`, {
        success: (data) => {
            data.sort((a, b) => b.stargazers_count - a.stargazers_count).forEach((repo) => {
                totalStars += repo.stargazers_count;

                if (repo.language) {
                    languages[repo.language] = languages[repo.language] ? ++languages[repo.language] : 1;
                }

                $('.' + organisation + ' ol.repos').append(`
              <li class="repos__item repo">
                  <div class="card">
                      <header class="card__header">
                          <a class="repo__title" href="${repo.html_url}" target="_blank">
                              <span class="repo__title-text">${repo.name}</span>
                              <svg class="icon repo__title-icon">${repo.name.startsWith('ext-') ? 'package' : 'repo'}</svg>
                          </a>
                      </header>
                      <div class="card__content">
                          <div class="repo__description">${repo.description || ''}</div>
                      </div>
                      <footer class="card__footer">
                          <div class="repo__summary">
                              ${!repo.language ? '' :
                    `<span class="repo__summary-item">
                                      <span class="repo__summary-text">${repo.language}</span>
                                  </span>`
                }
                              <a href="${repo.html_url}/stargazers" target="_blank" class="repo__summary-item">
                                  <span class="repo__summary-text">${repo.stargazers_count}</span>
                              </a>
                              <a href="${repo.html_url}/network" target="_blank" class="repo__summary-item">
                                  <span class="repo__summary-text">${repo.forks_count}</span>
                              </a>
                              ${!repo.homepage ? '' :
                    `<a href="${repo.homepage}" target="_blank" class="repo__summary-item">
                                      <span class="repo__summary-text">Website</span>
                                  </a>`
                }
                          </div>
                      </footer>
                  </div>
              </li>
            `);
            });

            $('.stats__count-stars').text(totalStars);
            $('.stats__count-repos').text(data.length);
            $('.stats__count-languages').text(Object.keys(languages).length);

            const colors = ['111111', '777777', 'cccccc'];
            Object.keys(languages).sort((a, b) => languages[b] - languages[a]).slice(0, 3).forEach((language, index) => {
                $('.' + organisation + ' .languages').append(
                    `<a class="languages__name" href="https://github.com/softreck?language=${language.toLowerCase()}" target="_blank" style="background-color:#${colors[index]};">${language}</a>`
                );
            });
        }
    });
} //function     loadGithubOrg();


function loadGitProjects(projects) {
    for (var i in projects) {
        var project = projects[i];
        loadGithubOrg(project);
    }
}


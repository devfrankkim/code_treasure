var url = "https://api.github.com/users/john-smilga/repos?per_page=100";
var fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();

  var newData = data.reduce((total, repo) => {
    const { language } = repo;

    // (1) total[language] = total[language] ? total[language] + 1 : 1;

    /* (2) 
				if(total[language]){            
            total = {...total, [language]: total[language] + 1}
        }else {
            total = {...total, [language]: 0}
        }
		*/

    // (3)
    if (language) total[language] = total[language] + 1 || 1;

    return total;
  }, {});

  console.log(newData);
};

// {JavaScript: 37, CSS: 44, HTML: 14, null: 3, SCSS: 2}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dacafd0389e5cf713aa3a30',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tiib23ps',
                  apiId: '88c59df7-857a-4fad-a03d-82a7ec131cd3'
                },
                {
                  buildHookId: '5dacafd0ad9e6341004b1ddc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-opd8r61f',
                  apiId: 'bf1f42a3-b0ea-42d7-b150-8c55a287c6e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thegravurebackup/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-opd8r61f.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

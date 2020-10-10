export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f81a8e9d8f8af6bf3e2c63d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-f6ooe5ro',
                  apiId: '48cc6387-f5d8-4771-be2d-47f990da46c4'
                },
                {
                  buildHookId: '5f81a8e9b8a91f786c2a5cff',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-4fbb4ab3',
                  apiId: '7f365c8a-f5bd-42f3-8bfb-6fbc8749db27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/igorramon/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-4fbb4ab3.netlify.app', category: 'apps'}
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

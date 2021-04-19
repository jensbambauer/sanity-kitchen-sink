export default {
  widgets: [
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
                  buildHookId: '607d3a9ad842d0a491ecbf44',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9turnupx',
                  apiId: 'a1f47a15-3682-496e-a3c7-86e10cc6ddc4'
                },
                {
                  buildHookId: '607d3a9a39599bf04a421d92',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j1tnymvx',
                  apiId: '142e0ae9-f045-4cf4-b9c7-019371bde842'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jensbambauer/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j1tnymvx.netlify.app', category: 'apps'}
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

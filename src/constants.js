export const cities = [
  { label: 'Select City', value: null },
  { label: 'New York', value: 'New York' },
  { label: 'Rome', value: 'Rome' },
  { label: 'London', value: 'London' },
  { label: 'Istanbul', value: 'Istanbul' },
  { label: 'Paris', value: 'Paris' }
]

export const splitButtonItems = [
  { label: 'Update', icon: 'pi pi-refresh' },
  { label: 'Delete', icon: 'pi pi-times' },
  {
    label: 'Home',
    icon: 'pi pi-home',
    url: 'http://www.primefaces.org/primereact'
  }
]

export const carOptions = [
  { label: 'Audi', value: 'Audi' },
  { label: 'BMW', value: 'BMW' },
  { label: 'Fiat', value: 'Fiat' },
  { label: 'Honda', value: 'Honda' },
  { label: 'Jaguar', value: 'Jaguar' },
  { label: 'Mercedes', value: 'Mercedes' },
  { label: 'Renault', value: 'Renault' },
  { label: 'VW', value: 'VW' },
  { label: 'Volvo', value: 'Volvo' }
]

export const types = [
  { label: 'Apartment', value: 'Apartment' },
  { label: 'House', value: 'House' },
  { label: 'Studio', value: 'Studio' }
]

export const listboxCities = [
  { label: 'Madrid', value: 'Madrid' },
  { label: 'Geneva', value: 'Geneva' },
  { label: 'Los Angeles', value: 'Los Angeles' },
  { label: 'Monaco', value: 'Monaco' },
  { label: 'Berlin', value: 'Berlin' }
]

export const menuItems = [
  {
    label: 'Options',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        command: () => (window.location.hash = '/fileupload')
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        url: 'http://primetek.com.tr'
      }
    ]
  },
  {
    label: 'Account',
    items: [
      {
        label: 'Options',
        icon: 'pi pi-fw pi-cog',
        command: () => (window.location.hash = '/')
      },
      { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' }
    ]
  }
]

export const images = [
  {
    source: 'assets/demo/images/sopranos/sopranos1.jpg',
    thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg',
    title: 'Sopranos 1'
  },
  {
    source: 'assets/demo/images/sopranos/sopranos2.jpg',
    thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg',
    title: 'Sopranos 2'
  },
  {
    source: 'assets/demo/images/sopranos/sopranos3.jpg',
    thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg',
    title: 'Sopranos 3'
  },
  {
    source: 'assets/demo/images/sopranos/sopranos4.jpg',
    thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg',
    title: 'Sopranos 4'
  }
]

export const breadcrumbItems = [
  { label: 'Categories' },
  { label: 'Sports' },
  { label: 'Football' },
  { label: 'Countries' },
  { label: 'Spain' },
  { label: 'F.C. Barcelona' },
  { label: 'Squad' },
  {
    label: 'Lionel Messi',
    url: 'https://en.wikipedia.org/wiki/Lionel_Messi'
  }
]

export const home = {
  icon: 'pi pi-home',
  url: 'https://www.primefaces.org/primereact'
}

export const stepsItems = [
  {
    label: 'Personal'
  },
  {
    label: 'Seat'
  },
  {
    label: 'Payment'
  },
  {
    label: 'Confirmation'
  }
]

export const tieredItems = [
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark'
          },
          {
            label: 'Video',
            icon: 'pi pi-fw pi-video'
          }
        ]
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      },
      {
        separator: true
      },
      {
        label: 'Export',
        icon: 'pi pi-fw pi-external-link'
      }
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'Left',
        icon: 'pi pi-fw pi-align-left'
      },
      {
        label: 'Right',
        icon: 'pi pi-fw pi-align-right'
      },
      {
        label: 'Center',
        icon: 'pi pi-fw pi-align-center'
      },
      {
        label: 'Justify',
        icon: 'pi pi-fw pi-align-justify'
      }
    ]
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus'
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus'
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Print',
                icon: 'pi pi-fw pi-print'
              }
            ]
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'List'
          }
        ]
      }
    ]
  },
  {
    label: 'Events',
    icon: 'pi pi-fw pi-calendar',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      },
      {
        label: 'Archieve',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
  },
  {
    label: 'Quit',
    icon: 'pi pi-fw pi-power-off'
  }
]

export const items = [
  {
    label: 'Options',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        command: () => (window.location.hash = '/fileupload')
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        url: 'http://primetek.com.tr'
      }
    ]
  },
  {
    label: 'Account',
    items: [
      {
        label: 'Options',
        icon: 'pi pi-fw pi-cog',
        command: () => (window.location.hash = '/')
      },
      { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' }
    ]
  }
]

export const panelMenuItems = [
  {
    label: 'Documents',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark'
          },
          {
            label: 'Video',
            icon: 'pi pi-fw pi-video'
          }
        ]
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      },
      {
        separator: true
      },
      {
        label: 'Export',
        icon: 'pi pi-fw pi-external-link'
      }
    ]
  },
  {
    label: 'Manage',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'Left',
        icon: 'pi pi-fw pi-align-left'
      },
      {
        label: 'Right',
        icon: 'pi pi-fw pi-align-right'
      },
      {
        label: 'Center',
        icon: 'pi pi-fw pi-align-center'
      },
      {
        label: 'Justify',
        icon: 'pi pi-fw pi-align-justify'
      }
    ]
  },
  {
    label: 'Accounts',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus'
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus'
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Print',
                icon: 'pi pi-fw pi-print'
              }
            ]
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'List'
          }
        ]
      }
    ]
  },
  {
    label: 'Calendar',
    icon: 'pi pi-fw pi-calendar',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      },
      {
        label: 'Archieve',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
  }
]

export const megaMenuItems = [
  {
    label: 'Videos',
    icon: 'pi pi-fw pi-video',
    items: [
      [
        {
          label: 'Video 1',
          items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
        },
        {
          label: 'Video 2',
          items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
        }
      ],
      [
        {
          label: 'Video 3',
          items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
        },
        {
          label: 'Video 4',
          items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
        }
      ]
    ]
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-users',
    items: [
      [
        {
          label: 'User 1',
          items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
        },
        {
          label: 'User 2',
          items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
        }
      ],
      [
        {
          label: 'User 3',
          items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
        },
        {
          label: 'User 4',
          items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
        }
      ],
      [
        {
          label: 'User 5',
          items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
        },
        {
          label: 'User 6',
          items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
        }
      ]
    ]
  },
  {
    label: 'Events',
    icon: 'pi pi-fw pi-calendar',
    items: [
      [
        {
          label: 'Event 1',
          items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
        },
        {
          label: 'Event 2',
          items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
        }
      ],
      [
        {
          label: 'Event 3',
          items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
        },
        {
          label: 'Event 4',
          items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
        }
      ]
    ]
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog',
    items: [
      [
        {
          label: 'Setting 1',
          items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
        },
        {
          label: 'Setting 2',
          items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
        },
        {
          label: 'Setting 3',
          items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
        }
      ],
      [
        {
          label: 'Technology 4',
          items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
        }
      ]
    ]
  }
]

export const tabMenuItems = [
  { label: 'Home', icon: 'pi pi-fw pi-home' },
  { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
  { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
  { label: 'Documentation', icon: 'pi pi-fw pi-file' },
  { label: 'Settings', icon: 'pi pi-fw pi-cog' }
]

export const brands = [
  'Audi',
  'BMW',
  'Fiat',
  'Ford',
  'Honda',
  'Jaguar',
  'Mercedes',
  'Renault',
  'Volvo'
]

export const listBoxCities = [
  { label: 'Madrid', value: 'Madrid' },
  { label: 'Geneva', value: 'Geneva' },
  { label: 'Los Angeles', value: 'Los Angeles' },
  { label: 'Monaco', value: 'Monaco' },
  { label: 'Berlin', value: 'Berlin' }
]

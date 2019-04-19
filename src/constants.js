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

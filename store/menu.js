export const state = () => ({
  main:[
    { 
      href: '/dashboard', 
      title: 'Dashboard', 
      icon: 'dashboard', 
    },
    { 
      href: '/recipes', 
      title: 'Recipes', 
      icon: 'book', 
    },
    { 
      href: '/inventory', 
      title: 'Inventory', 
      icon: 'ballot', 
    },
    { 
      href: '/orders',
      title: 'Orders', 
      icon: 'view_list', 
    },
    { 
      href: '/pos-items',
      title: 'POS Items', 
      icon: 'tablet_android', 
    },
    { 
      href: '/reports', 
      title: 'Reports', 
      icon: 'trending_up', 
    },
    { 
      divider: true,
    },
    { 
      href: '/settings',
      title: 'Settings', 
      icon: 'settings', 
    },
    { 
      href: '/help',
      title: 'Help', 
      icon: 'help', 
    },
  ],
});

interface IAddOrder {
  selectCategory: string;
  selectType: string;
  selectService: string;
  link: string;
  quantity: number;
  scheduleOrdersSet: boolean;
  scheduleOrders: string;
  splitOrdersSet: boolean;
  splitOrders: {
    interval: number;
    run: number;
  };
  serviceDetails: {};
  user_credits: number;
}

const inits: IAddOrder = {
  selectCategory: 'ig_likes',
  selectType: 'real',
  selectService: '',
  link: '',
  quantity: null,
  scheduleOrdersSet: false,
  scheduleOrders: null,
  splitOrdersSet: false,
  splitOrders: {
    interval: 0,
    run: 0
  },
  serviceDetails: {},
  user_credits: 0
};

const availableStaticValues = {
  ig_likes: {
    icon: 'fa fa-heart fa-2x',
    categoryName: 'Likes',
    quantityPlaceholder: 'Enter quantity of Likes that you want on the post.',
    exampleUrl: ''
  },
  ig_followers: {
    icon: 'fa fa-users fa-2x',
    categoryName: 'Followers',
    quantityPlaceholder: 'Enter quantity of Followers, want on profile.',
    exampleUrl: ''
  },
  ig_views: {
    icon: 'fa fa-grin-hearts fa-2x',
    categoryName: 'Views',
    quantityPlaceholder: 'Enter quantity of Views that you want on the post.',
    exampleUrl: ''
  },
  ig_comments: {
    icon: 'fa fa-comment-alt fa-2x',
    categoryName: 'Comments',
    quantityPlaceholder:
      'Enter quantity of Comments that you want on the post.',
    exampleUrl: ''
  }
};

export { IAddOrder, inits, availableStaticValues };

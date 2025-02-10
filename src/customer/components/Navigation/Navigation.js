export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id: 'top', href: `{women/clothing/tops}` },
              { name: 'Dresses', id: 'women_dress', href: '#' },
              { name: 'Women Jeans', id: 'women_jeans' },
              { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'saree' }
            ],

            items: [
                { name: 'Re-Arranged', id: '#' },
                { name: 'Counterfeit', id: '#' },
                { name: 'Full Nelson', id: '#' },
                { name: 'My Way', id: '#' }
              ],
              
          }
        ]
      }
    ],
    pages: [
        { name: 'Company', id: '/' },
        { name: 'Stores', id: '/' }
      ],
  };
  
import {Product} from './schema';

export const response: {
  success: boolean;
  data: {
    items: Product[];
  };
} & any = {
  success: true,
  data: {
    items: [
      {
        id: 11419,
        title: 'zwan test',
        brand: null,
        sap_id: null,
        sku: '8714555193224',
        class_name: 'Product',
        created_at: '2023-05-16T13:28:04.689Z',
        favorite: false,
        categories: [
          {
            id: 240,
            parent_category_id: 233,
            title: 'EGGS',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2021-09-14T06:41:51.201Z',
            images: [],
          },
          {
            id: 497,
            parent_category_id: 496,
            title: 'CHEESE',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2022-09-20T20:48:02.897Z',
            images: [],
          },
          {
            id: 714,
            parent_category_id: 713,
            title: 'asd',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2023-07-10T15:37:02.290Z',
            images: [],
          },
        ],
        original_price: '1000.0',
        discounted_price: '0.0',
        price: '1000.0',
        quantity: 7237,
        max_allowed_quantity: 0,
        shelf_zone: null,
        shelf_section: null,
        storage_shelf_zone: null,
        storage_shelf_section: null,
        sap_quantity: 0,
        store_id: 2,
        tax_percentage: '14.0',
        properties: [
          {
            title: 'Zwan Meat 250 G',
            value: 'Zwan Launchon Meat',
          },
        ],
        store_product_id: 20863,
        images: [
          {
            id: 7263,
            sort_order: 1,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2023-08-14T15:48:47.045Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/a3o7wvqe7yjk4f251hjgh1og96lx/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/a3o7wvqe7yjk4f251hjgh1og96lx/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/a3o7wvqe7yjk4f251hjgh1og96lx/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/a3o7wvqe7yjk4f251hjgh1og96lx/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/a3o7wvqe7yjk4f251hjgh1og96lx',
            extra_props: {
              identified: true,
            },
          },
          {
            id: 7264,
            sort_order: 2,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2023-08-14T15:48:47.059Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/5pw7nqq80rwx5ne6mdwp460xfb1u/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/5pw7nqq80rwx5ne6mdwp460xfb1u/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/5pw7nqq80rwx5ne6mdwp460xfb1u/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/5pw7nqq80rwx5ne6mdwp460xfb1u/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/5pw7nqq80rwx5ne6mdwp460xfb1u',
            extra_props: {
              identified: true,
            },
          },
        ],
      },
      {
        id: 3842,
        title: '4TH STREET SWEET WHITE WINE 750ML',
        brand: '4TH STREET',
        sap_id: '102153',
        sku: '6001108049599',
        class_name: 'Product',
        created_at: '2021-09-27T19:40:22.645Z',
        favorite: false,
        categories: [
          {
            id: 263,
            parent_category_id: 260,
            title: 'WHITE WINE',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2021-09-14T06:41:51.659Z',
            images: [],
          },
        ],
        original_price: '3999.0',
        discounted_price: '0.0',
        price: '3999.0',
        quantity: 0,
        max_allowed_quantity: 0,
        shelf_zone: 'B',
        shelf_section: '21',
        storage_shelf_zone: null,
        storage_shelf_section: null,
        sap_quantity: 0,
        store_id: 2,
        tax_percentage: '14.0',
        properties: [],
        store_product_id: 13486,
        images: [
          {
            id: 3791,
            sort_order: null,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2021-09-27T19:47:18.344Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/x8xhk0f5mpq580r9nhsgyudehn9x/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/x8xhk0f5mpq580r9nhsgyudehn9x/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/x8xhk0f5mpq580r9nhsgyudehn9x/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/x8xhk0f5mpq580r9nhsgyudehn9x/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/x8xhk0f5mpq580r9nhsgyudehn9x',
            extra_props: {
              identified: true,
            },
          },
        ],
      },
      {
        id: 2959,
        title: 'ABSOLUT VODKA BLUE 700ML',
        brand: 'ABSOLUT',
        sap_id: '102454',
        sku: '7312040017683',
        class_name: 'Product',
        created_at: '2021-09-27T19:39:54.873Z',
        favorite: false,
        categories: [
          {
            id: 271,
            parent_category_id: 260,
            title: 'VODKA',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2021-09-14T06:41:51.846Z',
            images: [],
          },
        ],
        original_price: '5999.0',
        discounted_price: '0.0',
        price: '5999.0',
        quantity: 11,
        max_allowed_quantity: 0,
        shelf_zone: 'B',
        shelf_section: '34',
        storage_shelf_zone: null,
        storage_shelf_section: null,
        sap_quantity: 0,
        store_id: 2,
        tax_percentage: '14.0',
        properties: [],
        store_product_id: 12791,
        images: [
          {
            id: 4279,
            sort_order: null,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2021-09-27T19:47:34.733Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/g7c7kl8sidcdodefd287uicsg10z',
            extra_props: {
              identified: true,
            },
          },
        ],
      },
      {
        id: 2959,
        title: 'ABSOLUT VODKA BLUE 700ML',
        brand: 'ABSOLUT',
        sap_id: '102454',
        sku: '7312040017683',
        class_name: 'Product',
        created_at: '2021-09-27T19:39:54.873Z',
        favorite: false,
        categories: [
          {
            id: 271,
            parent_category_id: 260,
            title: 'VODKA',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2021-09-14T06:41:51.846Z',
            images: [],
          },
        ],
        original_price: '5999.0',
        discounted_price: '0.0',
        price: '5999.0',
        quantity: 11,
        max_allowed_quantity: 0,
        shelf_zone: 'B',
        shelf_section: '34',
        storage_shelf_zone: null,
        storage_shelf_section: null,
        sap_quantity: 0,
        store_id: 2,
        tax_percentage: '14.0',
        properties: [],
        store_product_id: 12791,
        images: [
          {
            id: 4279,
            sort_order: null,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2021-09-27T19:47:34.733Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/g7c7kl8sidcdodefd287uicsg10z',
            extra_props: {
              identified: true,
            },
          },
        ],
      },
      {
        id: 2959,
        title: 'ABSOLUT VODKA BLUE 700ML',
        brand: 'ABSOLUT',
        sap_id: '102454',
        sku: '7312040017683',
        class_name: 'Product',
        created_at: '2021-09-27T19:39:54.873Z',
        favorite: false,
        categories: [
          {
            id: 271,
            parent_category_id: 260,
            title: 'VODKA',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2021-09-14T06:41:51.846Z',
            images: [],
          },
        ],
        original_price: '5999.0',
        discounted_price: '0.0',
        price: '5999.0',
        quantity: 11,
        max_allowed_quantity: 0,
        shelf_zone: 'B',
        shelf_section: '34',
        storage_shelf_zone: null,
        storage_shelf_section: null,
        sap_quantity: 0,
        store_id: 2,
        tax_percentage: '14.0',
        properties: [],
        store_product_id: 12791,
        images: [
          {
            id: 4279,
            sort_order: null,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2021-09-27T19:47:34.733Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/g7c7kl8sidcdodefd287uicsg10z',
            extra_props: {
              identified: true,
            },
          },
        ],
      },
      {
        id: 2959,
        title: 'ABSOLUT VODKA BLUE 700ML',
        brand: 'ABSOLUT',
        sap_id: '102454',
        sku: '7312040017683',
        class_name: 'Product',
        created_at: '2021-09-27T19:39:54.873Z',
        favorite: false,
        categories: [
          {
            id: 271,
            parent_category_id: 260,
            title: 'VODKA',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2021-09-14T06:41:51.846Z',
            images: [],
          },
        ],
        original_price: '5999.0',
        discounted_price: '0.0',
        price: '5999.0',
        quantity: 11,
        max_allowed_quantity: 0,
        shelf_zone: 'B',
        shelf_section: '34',
        storage_shelf_zone: null,
        storage_shelf_section: null,
        sap_quantity: 0,
        store_id: 2,
        tax_percentage: '14.0',
        properties: [],
        store_product_id: 12791,
        images: [
          {
            id: 4279,
            sort_order: null,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2021-09-27T19:47:34.733Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/g7c7kl8sidcdodefd287uicsg10z',
            extra_props: {
              identified: true,
            },
          },
        ],
      },
      {
        id: 2959,
        title: 'ABSOLUT VODKA BLUE 700ML',
        brand: 'ABSOLUT',
        sap_id: '102454',
        sku: '7312040017683',
        class_name: 'Product',
        created_at: '2021-09-27T19:39:54.873Z',
        favorite: false,
        categories: [
          {
            id: 271,
            parent_category_id: 260,
            title: 'VODKA',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2021-09-14T06:41:51.846Z',
            images: [],
          },
        ],
        original_price: '5999.0',
        discounted_price: '0.0',
        price: '5999.0',
        quantity: 11,
        max_allowed_quantity: 0,
        shelf_zone: 'B',
        shelf_section: '34',
        storage_shelf_zone: null,
        storage_shelf_section: null,
        sap_quantity: 0,
        store_id: 2,
        tax_percentage: '14.0',
        properties: [],
        store_product_id: 12791,
        images: [
          {
            id: 4279,
            sort_order: null,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2021-09-27T19:47:34.733Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/g7c7kl8sidcdodefd287uicsg10z',
            extra_props: {
              identified: true,
            },
          },
        ],
      },
      {
        id: 2959,
        title: 'ABSOLUT VODKA BLUE 700ML',
        brand: 'ABSOLUT',
        sap_id: '102454',
        sku: '7312040017683',
        class_name: 'Product',
        created_at: '2021-09-27T19:39:54.873Z',
        favorite: false,
        categories: [
          {
            id: 271,
            parent_category_id: 260,
            title: 'VODKA',
            category_type: 'normal',
            class_name: 'Category',
            created_at: '2021-09-14T06:41:51.846Z',
            images: [],
          },
        ],
        original_price: '5999.0',
        discounted_price: '0.0',
        price: '5999.0',
        quantity: 11,
        max_allowed_quantity: 0,
        shelf_zone: 'B',
        shelf_section: '34',
        storage_shelf_zone: null,
        storage_shelf_section: null,
        sap_quantity: 0,
        store_id: 2,
        tax_percentage: '14.0',
        properties: [],
        store_product_id: 12791,
        images: [
          {
            id: 4279,
            sort_order: null,
            attachment_type: 'other',
            class_name: 'Attachment',
            created_at: '2021-09-27T19:47:34.733Z',
            thumbnail:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
            large:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
            small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
            extra_small:
              'https://cdn.manoapp.com/variants/g7c7kl8sidcdodefd287uicsg10z/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
            original: 'https://cdn.manoapp.com/g7c7kl8sidcdodefd287uicsg10z',
            extra_props: {
              identified: true,
            },
          },
        ],
      },
    ],
    extra_data: {
      filters: {},
    },
    current_count: 1842,
    total: 1842,
    limit: -1,
    offset: -1,
  },
  code: 'ok',
  message: null,
  request_data: {
    started_at: '2023-12-05T01:33:05.200+00:00',
    ended_at: '2023-12-05T01:33:31.323+00:00',
  },
};

const asyncRoutes = {
    'customer': [{
        path: '/product',
        meta: {
            title: '商品',
            requireAuth: true
        },
        component: () =>
            import ('@/views/Home'),
        children: [{
                path: 'productlist',
                name: 'productlist',
                meta: {
                    title: '商品列表',
                    requireAuth: true
                },
                component: () =>
                    import ("@/views/ProductList")
            },
            {
                path: 'producadd',
                name: 'producadd',
                meta: {
                    title: '添加商品',
                    requireAuth: true
                },
                component: () =>
                    import ("@/views/ProductAdd")
            }
        ]
    }],
    'admin': [{
        path: '/product',
        meta: {
            title: '商品',
            requireAuth: true
        },
        component: () =>
            import ('@/views/Home'),
        children: [{
                path: 'productlist',
                name: 'productlist',
                meta: {
                    title: '商品列表',
                    requireAuth: true
                },
                component: () =>
                    import ("@/views/ProductList")
            },
            {
                path: 'producadd',
                name: 'producadd',
                meta: {
                    title: '添加商品',
                    requireAuth: true
                },
                component: () =>
                    import ("@/views/ProductAdd")
            },
            {
                path: 'category',
                name: 'category',
                meta: {
                    title: '目录',
                    requireAuth: true
                },
                component: () =>
                    import ("@/views/Category")
            }
        ]
    }],
}

/**
 * 
 * @param {String} role 
 */
export default function decideRoutes(role) {
    if (role) {
        if (role === 'coustomer') {
            return asyncRoutes.customer;
        } else {
            return asyncRoutes.admin;
        }
    }
}
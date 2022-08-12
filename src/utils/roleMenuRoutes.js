const asyncRoutes = {
    'customer': [{
        path: '/product',
        name: 'product',
        meta: {
            title: '商品',
            requireAuth: true,
            show: true,
            icon: 'container'
        },
        component: () =>
            import ('@/views/Home'),
        children: [{
                path: 'productlist',
                name: 'productlist',
                meta: {
                    title: '商品列表',
                    requireAuth: true,
                    show: true,
                    icon: 'unordered-list'
                },
                component: () =>
                    import ("@/views/ProductList")
            },
            {
                path: 'productadd',
                name: 'productadd',
                meta: {
                    title: '添加商品',
                    requireAuth: true,
                    show: true,
                    icon: 'appstore'
                },
                component: () =>
                    import ("@/views/ProductAdd")
            }
        ]
    }],
    'admin': [{
        path: '/product',
        name: 'product',
        meta: {
            title: '商品',
            requireAuth: true,
            show: true,
            icon: 'container-filled'
        },
        component: () =>
            import ('@/views/Home'),
        children: [{
                path: 'productlist',
                name: 'productlist',
                meta: {
                    title: '商品列表',
                    requireAuth: true,
                    show: true,
                    icon: 'unordered-list'
                },
                component: () =>
                    import ("@/views/ProductList")
            },
            {
                path: 'productadd',
                name: 'productadd',
                meta: {
                    title: '添加商品',
                    requireAuth: true,
                    show: true,
                    icon: 'appstore'
                },
                component: () =>
                    import ("@/views/ProductAdd")
            },
            {
                path: 'category',
                name: 'category',
                meta: {
                    title: '目录',
                    requireAuth: true,
                    show: true,
                    icon: 'branches'
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
<template>
    <div>
        <sidebar-menu>
            <span>Home Side</span>
        </sidebar-menu>
    </div>
</template>

<script>
export default {
    // data() {
    //         return {
    //             menu: [
    //                 {
    //                     header: true,
    //                     title: 'Main Navigation',
    //                     hiddenOnCollapse: true
    //                 },
    //                 {
    //                     href: '/',
    //                     title: 'Dashboard',
    //                     icon: 'fa fa-user'
    //                 },
    //                 {
    //                     href: '/charts',
    //                     title: 'Charts',
    //                     icon: 'fa fa-chart-area',
    //                     child: [
    //                         {
    //                             href: '/charts/sublink',
    //                             title: 'Sub Link'
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     },
        props: {
            // Sidebar menu (required)
            menu: {
            type: Array,
            required: true
            },

            // Sidebar Collapse state
            collapsed: {
            type: Boolean,
            default: false
            },

            // Sidebar width (expanded)
            width: {
            type: String,
            default: '150px'
            },

            // Sidebar width (collapsed)
            widthCollapsed: {
            type: String,
            default: '50px'
            },

            // Keep only one child opened at a time (first level only)
            showOneChild: {
            type: Boolean,
            default: false
            },

            // Keep all child open
            showChild: {
            type: Boolean,
            default: false
            },

            // Sidebar right to left
            rtl: {
            type: Boolean,
            default: false
            },

            // Make sidebar relative to the parent (by default the sidebar is relative to the viewport)
            relative: {
            type: Boolean,
            default: false
            },

            // Hide toggle collapse btn
            hideToggle: {
            type: Boolean,
            default: false
            },

            // Sidebar theme (available themes: 'white-theme')
            theme: {
            type: String,
            default: ''
            },

            // Disable hover on collapse mode
            disableHover: {
            type: Boolean,
            default: false
            }
        }
}
</script>
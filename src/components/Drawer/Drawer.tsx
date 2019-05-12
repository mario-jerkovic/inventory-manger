import React from 'react'
import {
    Drawer as MaterialDrawer,
    DrawerHeader,
    DrawerTitle,
    DrawerContent,
} from '@rmwc/drawer'

import {
    DrawerProps,
} from './Drawer.types'

import './Drawer.css'

export const Drawer: React.FunctionComponent<DrawerProps> = (props) => {
    const {
        children,
        isOpen,
        onClose,
        title,
    } = props

    return (
        <MaterialDrawer
            className="drawer"
            modal={true}
            open={isOpen}
            onClose={onClose}
        >
            <DrawerHeader >
                <DrawerTitle >
                    {title}
                </DrawerTitle >
            </DrawerHeader >
            <DrawerContent >
                {children}
            </DrawerContent >
        </MaterialDrawer >
    )
}

Drawer.defaultProps = {
    isOpen: false,
}

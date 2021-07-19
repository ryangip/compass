import { MouseEventHandler } from 'react';

import { TIconGlyph } from '../../foundations/icon';
import PAriaAllAttributes from '../../shared/props';

import {
    TButtonIconPosition,
    TButtonSizeToken,
    TButtonVariant,
    TButtonWidth,
} from './Button.types';

type PButton = Partial<PAriaAllAttributes> & {
    /**
     * the label to be shown for the button. This will be normalized and used
     * as the 'aria-label' attribute if no 'aria-label' is added as property
     */
    label: string;
    /**
     * when pushing a button is potentially harmful use this property to show a
     * visual hint to that (button turns red/to the defined alert color)
     * @default false
     */
    destructive?: boolean;
    /**
     * in some cases it is useful to show an inverted version of the button
     * to increase visibility and readability
     * @default false
     */
    inverted?: boolean;
    /**
     * disable a button with this property. It won't be clickable and shows a
     * visual hint on the cursor, that interaction is not possible
     * @default false
     */
    disabled?: boolean;
    /**
     * there are 3 different variants for buttons:
     *  'primary': a full-colored, bold and visually string button
     *  'secondary': bordered, without background-color
     *  'tertiary': no-border, with opaque background color
     *  @default 'primary'
     */
    variant?: TButtonVariant;
    /**
     * either set a numerical width in px, set it to 'full' to span the
     * full-width or leave it as is ('dynamic') to let the content define
     * the width
     * @default 'dynamic'
     */
    width?: TButtonWidth;
    /**
     * sizing for the buttons. 'sm' (small), 'md' (medium) and 'lg' (large)
     * @default 'md'
     */
    size?: TButtonSizeToken;
    /**
     * where should the icon be positioned?
     * @default 'start'
     */
    iconPosition?: TButtonIconPosition;
    /**
     * when you want to use a Icon in the button pass the iconglyph (name) here
     */
    icon?: TIconGlyph;
    /**
     * click-event handler
     */
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    /**
     * custom className
     */
    className?: string;
};

type PButtonRoot = Required<
    Pick<PButton, 'destructive' | 'inverted' | 'disabled' | 'variant' | 'width' | 'size'>
>;

type PButtonIconRoot = {
    margin: number;
    marginPosition: 'left' | 'right';
};

export type { PButtonRoot, PButtonIconRoot };

export default PButton;

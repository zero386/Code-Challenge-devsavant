export interface DropdownItem {
    id: number;
    name: string;
    displayName: string;
    icon?: string
}

export interface Icon {
    display: boolean;
    src: string;
}

export interface WidgetStructure {
    id: number;
    name: string;
    row: number;
    column: number;
    metadata: any;
}

export interface Widget {
    id: number;
    meta: object;
    name: string;
}

export interface UserSession {
    id: number;
    user: string;
}